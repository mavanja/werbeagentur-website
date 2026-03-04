import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Werbeagentur | Kreativ. Strategisch. Wirksam.",
  description:
    "Ihre Werbeagentur fuer Branding, Performance-Marketing und digitale Kampagnen. Wir machen Marken sichtbar.",
  keywords: [
    "Werbeagentur",
    "Branding",
    "Marketing",
    "Webdesign",
    "Digitale Kampagnen",
  ],
  openGraph: {
    title: "Werbeagentur | Kreativ. Strategisch. Wirksam.",
    description:
      "Ihre Werbeagentur fuer Branding, Performance-Marketing und digitale Kampagnen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={plusJakarta.variable}>
      <body className="font-body bg-surface-50 text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
