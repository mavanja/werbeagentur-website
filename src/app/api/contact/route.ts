import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema, type ContactFormData } from '../../../lib/validations/contact';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  });
}, RATE_WINDOW);

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as string;
        errors[path] = err.message;
      });

      return NextResponse.json(
        { error: 'Validierungsfehler', fields: errors },
        { status: 400 }
      );
    }

    const data: ContactFormData = result.data;

    // Check honeypot
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently succeed to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Send email
    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}

async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Create transporter - configure based on your email provider
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceLabels: Record<string, string> = {
    branding: 'Branding & Corporate Design',
    social: 'Social Media Marketing',
    performance: 'Performance Marketing',
    webdesign: 'Webdesign & Entwicklung',
    sonstiges: 'Sonstiges',
  };

  const emailContent = `
Neue Kontaktanfrage über die Website

Name: ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}
${data.company ? `Unternehmen: ${data.company}` : ''}
Interessiert an: ${serviceLabels[data.service] || data.service}

Nachricht:
${data.message}

---
Diese E-Mail wurde automatisch über das Kontaktformular der Website generiert.
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #e94560 0%, #f5a623 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
  </div>
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; width: 140px;">Name:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">E-Mail:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
          <a href="mailto:${data.email}" style="color: #e94560;">${data.email}</a>
        </td>
      </tr>
      ${data.phone ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">Telefon:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
          <a href="tel:${data.phone}" style="color: #e94560;">${data.phone}</a>
        </td>
      </tr>
      ` : ''}
      ${data.company ? `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">Unternehmen:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.company}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">Leistung:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
          <span style="background: #e94560; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
            ${serviceLabels[data.service] || data.service}
          </span>
        </td>
      </tr>
    </table>
    
    <div style="margin-top: 24px;">
      <h2 style="font-size: 16px; margin-bottom: 12px; color: #1a1a2e;">Nachricht:</h2>
      <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #e94560;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
    </div>
  </div>
  
  <p style="color: #9e9e9e; font-size: 12px; text-align: center; margin-top: 20px;">
    Diese E-Mail wurde automatisch über das Kontaktformular generiert.
  </p>
</body>
</html>
  `.trim();

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'website@werbeagentur.de',
    to: process.env.CONTACT_EMAIL || 'hello@werbeagentur.de',
    replyTo: data.email,
    subject: `Neue Kontaktanfrage: ${data.name} - ${serviceLabels[data.service]}`,
    text: emailContent,
    html: htmlContent,
  });
}
