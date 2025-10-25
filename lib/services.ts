import { CleaningService } from './types';

export const CLEANING_SERVICES: CleaningService[] = [
  // Residential Services
  {
    id: 'basic-clean',
    name: 'Basic House Cleaning',
    description: 'Dusting, vacuuming, mopping, bathroom & kitchen cleaning',
    basePrice: 120,
    category: 'residential',
    duration: '2-3 hours'
  },
  {
    id: 'deep-clean',
    name: 'Deep House Cleaning',
    description: 'Thorough cleaning including baseboards, inside appliances, detailed scrubbing',
    basePrice: 250,
    category: 'residential',
    duration: '4-6 hours'
  },
  {
    id: 'move-in-out',
    name: 'Move In/Out Cleaning',
    description: 'Complete cleaning for moving, includes inside cabinets, closets, all surfaces',
    basePrice: 300,
    category: 'residential',
    duration: '5-7 hours'
  },
  {
    id: 'apartment-clean',
    name: 'Apartment Cleaning',
    description: 'Complete cleaning for apartments and condos',
    basePrice: 100,
    category: 'residential',
    duration: '2 hours'
  },
  {
    id: 'post-construction',
    name: 'Post-Construction Cleaning',
    description: 'Remove dust, debris, and polish surfaces after renovation',
    basePrice: 400,
    category: 'residential',
    duration: '6-8 hours'
  },

  // Commercial Services
  {
    id: 'office-clean',
    name: 'Office Cleaning',
    description: 'Desk areas, common spaces, restrooms, break rooms',
    basePrice: 150,
    category: 'commercial',
    duration: '2-4 hours'
  },
  {
    id: 'retail-clean',
    name: 'Retail Store Cleaning',
    description: 'Sales floor, fitting rooms, restrooms, back areas',
    basePrice: 200,
    category: 'commercial',
    duration: '3-5 hours'
  },
  {
    id: 'medical-clean',
    name: 'Medical Office Cleaning',
    description: 'Sanitization and cleaning for healthcare facilities',
    basePrice: 300,
    category: 'commercial',
    duration: '3-4 hours'
  },
  {
    id: 'restaurant-clean',
    name: 'Restaurant Cleaning',
    description: 'Kitchen, dining area, and restroom deep cleaning',
    basePrice: 350,
    category: 'commercial',
    duration: '4-6 hours'
  },

  // Specialty Services
  {
    id: 'carpet-clean',
    name: 'Carpet Cleaning',
    description: 'Professional steam cleaning for carpets and rugs',
    basePrice: 150,
    category: 'specialty',
    duration: '2-3 hours'
  },
  {
    id: 'window-clean',
    name: 'Window Cleaning',
    description: 'Interior and exterior window cleaning',
    basePrice: 100,
    category: 'specialty',
    duration: '1-2 hours'
  },
  {
    id: 'upholstery-clean',
    name: 'Upholstery Cleaning',
    description: 'Deep cleaning for furniture and fabric surfaces',
    basePrice: 120,
    category: 'specialty',
    duration: '2-3 hours'
  },
  {
    id: 'air-duct-clean',
    name: 'Air Duct Cleaning',
    description: 'HVAC system and air duct cleaning',
    basePrice: 300,
    category: 'specialty',
    duration: '3-4 hours'
  },
  {
    id: 'pressure-wash',
    name: 'Pressure Washing',
    description: 'Exterior surfaces, driveways, decks, and patios',
    basePrice: 200,
    category: 'specialty',
    duration: '2-4 hours'
  },
  {
    id: 'disinfection',
    name: 'Disinfection Service',
    description: 'Professional-grade sanitization and disinfection',
    basePrice: 180,
    category: 'specialty',
    duration: '2-3 hours'
  },
];

export function calculateTotal(serviceIds: string[], squareFootage?: number): number {
  const selectedServices = CLEANING_SERVICES.filter(s => serviceIds.includes(s.id));
  let total = selectedServices.reduce((sum, service) => sum + service.basePrice, 0);

  // Apply square footage multiplier for large properties
  if (squareFootage && squareFootage > 2000) {
    const multiplier = 1 + ((squareFootage - 2000) / 2000) * 0.5;
    total *= multiplier;
  }

  return Math.round(total);
}
