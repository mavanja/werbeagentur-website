import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Werbeagentur | Kreativ. Strategisch. Wirksam.",
  description: "Ihre Werbeagentur fuer Branding, Performance-Marketing und digitale Kampagnen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${plusJakartaSans.variable}`}>
      <body className="font-body bg-primary text-white antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
