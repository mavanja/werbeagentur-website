import { z } from 'zod';

export const serviceOptions = [
  { value: 'branding', label: 'Branding & Corporate Design' },
  { value: 'social', label: 'Social Media Marketing' },
  { value: 'performance', label: 'Performance Marketing' },
  { value: 'webdesign', label: 'Webdesign & Entwicklung' },
  { value: 'sonstiges', label: 'Sonstiges' },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen haben')
    .max(100, 'Name darf maximal 100 Zeichen haben'),
  email: z
    .string()
    .email('Bitte eine gültige E-Mail-Adresse eingeben'),
  phone: z
    .string()
    .max(30, 'Telefonnummer zu lang')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(100, 'Firmenname zu lang')
    .optional()
    .or(z.literal('')),
  service: z
    .enum(['branding', 'social', 'performance', 'webdesign', 'sonstiges'], {
      errorMap: () => ({ message: 'Bitte eine Leistung auswählen' }),
    }),
  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen haben')
    .max(5000, 'Nachricht darf maximal 5000 Zeichen haben'),
  privacy: z
    .literal(true, {
      errorMap: () => ({ message: 'Bitte Datenschutzerklärung akzeptieren' }),
    }),
  honeypot: z
    .string()
    .max(0, 'Bot detected')
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
