import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
