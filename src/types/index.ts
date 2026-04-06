export type Category =
  | 'sarms'
  | 'peptides'
  | 'nootropics'
  | 'prohormones'
  | 'supplements'
  | 'injectables'
  | 'merch';

export type ProductForm = 'liquid' | 'capsules' | 'nasal-spray' | 'injectable' | 'powder';

export interface ProductVariant {
  id: string;
  label: string;     // e.g. "30ml / 10mg"
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  chemicalName: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string;
  purity: string;       // e.g. "≥99%"
  category: Category;
  forms: ProductForm[];
  variants: ProductVariant[];
  shortDescription: string;
  overview: string;
  storageConditions: string;
  batchNumber: string;
  coaUrl: string;
  sdsUrl?: string;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  reviewCount?: number;
  reviewAverage?: number;
  relatedIds?: string[];
  isInjectable?: boolean;
}

export interface ResearchSet {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  productIds: string[];
  price: number;
  originalPrice?: number;
  image?: string;
}

export interface ServiceReview {
  id: string;
  author: string;
  rating: number;
  title: string;
  body: string;   // service/shipping only — no efficacy content
  date: string;
  verified: boolean;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'sarms' | 'peptides' | 'nootropics' | 'multi-compound' | 'regulatory';
  readTime: number;
  publishedAt: string;
  image?: string;
  body?: ArticleSection[];
  relatedProductSlugs?: string[];
}
