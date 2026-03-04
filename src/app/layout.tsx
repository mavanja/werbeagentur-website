import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Werbeagentur | Kreativ. Strategisch. Wirksam.",
  description: "Ihre Werbeagentur fuer Branding, Performance-Marketing und digitale Kampagnen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
