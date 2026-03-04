export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  results: string[];
  imageUrl: string;
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
