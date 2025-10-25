import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ServiceData = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  priceRange: string;
  duration: string;
  includes: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

const services: Record<string, ServiceData> = {
  'house-cleaning': {
    slug: 'house-cleaning',
    name: 'House Cleaning',
    icon: '🏠',
    description: 'Professional residential cleaning services for homes of all sizes',
    longDescription: 'Our house cleaning services provide thorough, professional cleaning for your entire home. Whether you need weekly maintenance or a one-time deep clean, our verified professionals will leave your home spotless.',
    priceRange: '$120 - $300',
    duration: '2-4 hours',
    includes: [
      'Dust all surfaces and furniture',
      'Vacuum and mop all floors',
      'Clean and sanitize bathrooms',
      'Kitchen cleaning and appliance wipe-down',
      'Empty trash and replace liners',
      'Make beds and tidy rooms',
    ],
    benefits: [
      'Save 3-5 hours per week',
      'Professional-grade equipment and products',
      'Consistent, high-quality results',
      'Flexible scheduling',
      'Insured and bonded cleaners',
    ],
    faqs: [
      {
        q: 'How much does house cleaning cost?',
        a: 'House cleaning typically costs between $120-$300 depending on home size, condition, and frequency. Regular bi-weekly or weekly cleanings are usually discounted.',
      },
      {
        q: 'Do I need to be home during cleaning?',
        a: 'No, you don\'t need to be home. Many customers provide a key or entry code for convenience.',
      },
      {
        q: 'What\'s included in standard house cleaning?',
        a: 'Standard cleaning includes all living areas, bedrooms, bathrooms, and kitchen. This includes dusting, vacuuming, mopping, and sanitizing surfaces.',
      },
    ],
  },
  'deep-cleaning': {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    icon: '✨',
    description: 'Intensive top-to-bottom cleaning for your entire home',
    longDescription: 'Deep cleaning goes beyond regular cleaning to address built-up dirt, grime, and neglected areas. Perfect for spring cleaning, moving preparation, or getting your home back to pristine condition.',
    priceRange: '$250 - $600',
    duration: '4-8 hours',
    includes: [
      'Everything in standard cleaning PLUS:',
      'Clean inside appliances (oven, refrigerator, microwave)',
      'Scrub tile and grout',
      'Clean baseboards and door frames',
      'Dust ceiling fans and light fixtures',
      'Clean inside cabinets and drawers (if requested)',
      'Detailed bathroom deep cleaning',
      'Window cleaning (interior)',
    ],
    benefits: [
      'Removes years of built-up dirt and grime',
      'Healthier indoor air quality',
      'Perfect for allergy sufferers',
      'Great before/after major events',
      'Increases home value',
    ],
    faqs: [
      {
        q: 'How often should I get deep cleaning?',
        a: 'Most homes benefit from deep cleaning 2-4 times per year, or before/after major events, moves, or seasonal changes.',
      },
      {
        q: 'How long does deep cleaning take?',
        a: 'Deep cleaning typically takes 4-8 hours depending on home size and condition. Larger homes may require multiple cleaners or days.',
      },
      {
        q: 'Is deep cleaning worth the cost?',
        a: 'Yes! Deep cleaning extends the life of your surfaces, improves air quality, and makes regular maintenance much easier.',
      },
    ],
  },
  'office-cleaning': {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    icon: '🏢',
    description: 'Professional commercial cleaning for offices and workspaces',
    longDescription: 'Maintain a clean, professional workspace with our commercial office cleaning services. We provide flexible scheduling including after-hours service to minimize disruption to your business.',
    priceRange: '$150 - $500',
    duration: '2-6 hours',
    includes: [
      'Vacuum and mop all floors',
      'Empty trash and recycling',
      'Clean and sanitize restrooms',
      'Dust desks, shelves, and surfaces',
      'Clean break room and kitchen areas',
      'Sanitize high-touch surfaces',
      'Window and glass cleaning',
    ],
    benefits: [
      'Healthier work environment',
      'Improved employee productivity',
      'Professional appearance for clients',
      'Flexible scheduling options',
      'Customizable cleaning plans',
    ],
    faqs: [
      {
        q: 'Do you offer after-hours cleaning?',
        a: 'Yes! Most office cleaning is performed after business hours (evenings or weekends) to avoid disrupting your operations.',
      },
      {
        q: 'How much does office cleaning cost?',
        a: 'Commercial cleaning costs vary based on square footage, frequency, and services needed. Most offices range from $150-$500 per visit.',
      },
      {
        q: 'Are your cleaners background checked?',
        a: 'Yes, all commercial cleaners are background checked, insured, and bonded for your security and peace of mind.',
      },
    ],
  },
  'carpet-cleaning': {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: '🧹',
    description: 'Professional carpet and upholstery steam cleaning services',
    longDescription: 'Revitalize your carpets with professional steam cleaning. Our hot water extraction method removes deep-set dirt, allergens, and stains, extending the life of your carpets.',
    priceRange: '$150 - $400',
    duration: '2-4 hours',
    includes: [
      'Pre-treatment of stains',
      'Hot water extraction (steam cleaning)',
      'Furniture moving (if requested)',
      'Pet odor treatment',
      'Fast-drying techniques',
      'Spot and stain removal',
    ],
    benefits: [
      'Removes allergens and bacteria',
      'Eliminates pet odors',
      'Extends carpet life',
      'Improves indoor air quality',
      'Restores carpet appearance',
    ],
    faqs: [
      {
        q: 'How long until carpets are dry?',
        a: 'Most carpets dry within 6-12 hours with our fast-drying techniques. Using fans can speed up the process.',
      },
      {
        q: 'Can you remove all stains?',
        a: 'We can remove most stains, but some permanent stains may only lighten. Pet stains, food/drink spills are usually fully removable.',
      },
      {
        q: 'How often should carpets be professionally cleaned?',
        a: 'High-traffic areas benefit from cleaning every 6-12 months. Low-traffic areas every 12-18 months.',
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = services[params.service];

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} Services | Professional ${service.name} - Get Instant Quote`,
    description: `${service.description}. ${service.longDescription}. Get free quotes from verified professionals.`,
    openGraph: {
      title: `${service.name} Services - Professional & Affordable`,
      description: service.description,
    },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'CleaningA2.com',
    },
    offers: {
      '@type': 'Offer',
      priceRange: service.priceRange,
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.name} Services</h1>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:shadow-xl transition">
                  Get Free Quote
                </Link>
                <Link href="/directory" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-white hover:text-primary-600 transition">
                  Find Local Cleaners
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{service.priceRange}</div>
                <div className="text-gray-600">Typical Price Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{service.duration}</div>
                <div className="text-gray-600">Average Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book {service.name}?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Get instant quotes from verified local professionals
            </p>
            <Link
              href="/quote"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:shadow-2xl transition"
            >
              Get Free Quote Now
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {Object.values(services)
                .filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/services/${relatedService.slug}`}
                    className="card text-center hover:shadow-xl transition"
                  >
                    <div className="text-4xl mb-3">{relatedService.icon}</div>
                    <h3 className="font-bold mb-2">{relatedService.name}</h3>
                    <p className="text-sm text-gray-600">{relatedService.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    service: slug,
  }));
}
