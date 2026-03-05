import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Werbeagentur | Kreativ. Strategisch. Wirksam.",
  description: "Ihre Werbeagentur fuer Branding, Performance-Marketing und digitale Kampagnen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={plusJakarta.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
