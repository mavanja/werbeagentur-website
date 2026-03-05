export interface CaseStudyResult {
  metric: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  serviceLabels: string[];
  coverImage: string;
  galleryImages?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  privacy: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
