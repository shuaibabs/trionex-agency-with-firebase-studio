
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  scope: string[];
  process: { step: number; title: string; description: string }[];
  priceRange: string;
  caseStudyIds: string[];
  category: 'Web Development' | 'Digital Marketing';
  imageId: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: 'Web' | 'Ads' | 'SEO';
  shortDescription: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description:string }[];
  imageId: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageId: string;
  author: {
    name: string;
    avatarId: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarId: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarId: string;
}

export interface Client {
  id: string;
  name: string;
  imageId: string;
}

export interface PlaceholderImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}
