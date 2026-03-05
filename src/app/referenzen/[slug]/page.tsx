import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyDetailClient } from "./CaseStudyDetailClient";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    return { title: "Case Study nicht gefunden" };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.shortDescription,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailClient caseStudy={caseStudy} />;
}
