import { Metadata } from "next";
import { ReferenzenPageClient } from "./ReferenzenPageClient";

export const metadata: Metadata = {
  title: "Referenzen | Unsere Erfolgsgeschichten",
  description: "Entdecken Sie unsere Case Studies: Konkrete Projekterfolge mit messbaren Ergebnissen in Branding, Performance Marketing und digitaler Strategie.",
};

export default function ReferenzenPage() {
  return <ReferenzenPageClient />;
}
