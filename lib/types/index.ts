// Service types and pricing
export interface CleaningService {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'residential' | 'commercial' | 'specialty';
  duration?: string;
}

export interface QuoteFormData {
  // Phone gate - required first
  phone: string;

  // Customer info
  name: string;
  email: string;
  zipCode: string;

  // Selected services
  services: string[];

  // Property details
  propertyType: 'apartment' | 'house' | 'office' | 'other';
  squareFootage?: number;
  bedrooms?: number;
  bathrooms?: number;

  // Additional info
  preferredDate?: string;
  additionalNotes?: string;

  // Calculated
  estimatedTotal: number;
}

// Directory types
export interface DirectoryListing {
  id: string;
  companyName: string;
  description: string;
  rating: number;
  reviewCount: number;
  serviceArea: string[];
  services: string[];

  // Free tier fields
  verified: boolean;

  // Paid tier fields (optional)
  isPaid: boolean;
  phoneNumber?: string;
  website?: string;
  logo?: string;
  featured?: boolean;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

// Email types
export interface LeadEmail {
  to: string;
  subject: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    zipCode: string;
  };
  services: CleaningService[];
  estimatedTotal: number;
  additionalInfo?: string;
}

// Affiliate types
export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  affiliateLink: string;
  imageUrl: string;
  category: string;
  rating?: number;
}
