import {
  HeroSection,
  ServiceTeaser,
  CaseStudyPreview,
  TrustBar,
  CtaSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceTeaser />
      <CaseStudyPreview />
      <TrustBar />
      <CtaSection />
    </main>
  );
}
