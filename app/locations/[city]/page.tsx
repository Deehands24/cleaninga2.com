import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type LocationData = {
  city: string;
  slug: string;
  state: string;
  population: string;
  zipCodes: string[];
  neighborhoods: string[];
  avgPrice: string;
  description: string;
};

const locations: Record<string, LocationData> = {
  'ann-arbor': {
    city: 'Ann Arbor',
    slug: 'ann-arbor',
    state: 'Michigan',
    population: '123,000',
    zipCodes: ['48103', '48104', '48105', '48108'],
    neighborhoods: ['Downtown', 'Kerrytown', 'Burns Park', 'Old West Side', 'Water Hill'],
    avgPrice: '$150',
    description: 'Find top-rated professional cleaning services in Ann Arbor, MI. Get instant quotes from verified local cleaners serving the entire Ann Arbor area.',
  },
  'detroit': {
    city: 'Detroit',
    slug: 'detroit',
    state: 'Michigan',
    population: '670,000',
    zipCodes: ['48201', '48202', '48204', '48207', '48226'],
    neighborhoods: ['Downtown', 'Midtown', 'Corktown', 'Eastern Market', 'New Center'],
    avgPrice: '$140',
    description: 'Professional cleaning services in Detroit, MI. Compare quotes from top-rated local cleaning companies serving all Detroit neighborhoods.',
  },
  'grand-rapids': {
    city: 'Grand Rapids',
    slug: 'grand-rapids',
    state: 'Michigan',
    population: '198,000',
    zipCodes: ['49503', '49504', '49505', '49506', '49507'],
    neighborhoods: ['Heritage Hill', 'East Hills', 'Eastown', 'Wealthy Street', 'Creston'],
    avgPrice: '$135',
    description: 'Top-rated cleaning services in Grand Rapids, MI. Get free instant quotes from verified professional cleaners in your area.',
  },
};

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const location = locations[params.city];

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.city} Cleaning Services | Professional Cleaners in ${location.city}, ${location.state}`,
    description: location.description,
    openGraph: {
      title: `${location.city} Cleaning Services - Top Rated Professional Cleaners`,
      description: location.description,
    },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = locations[params.city];

  if (!location) {
    notFound();
  }

  // JSON-LD for Local Business Service Area
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cleaning Services',
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'CleaningA2.com',
      url: 'https://cleaninga2.com',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '80',
      highPrice: '500',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Cleaning Services in {location.city}, {location.state}
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:shadow-xl transition">
                Get Free Instant Quote
              </Link>
              <Link href="/directory" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-white hover:text-primary-600 transition">
                Browse Local Cleaners
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{location.population}</div>
                <div className="text-gray-600">Residents Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Verified Cleaners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{location.avgPrice}</div>
                <div className="text-gray-600">Average Price</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Cleaning Services in {location.city}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'House Cleaning', price: 'From $120', icon: '🏠', desc: 'Regular or one-time residential cleaning' },
                { name: 'Deep Cleaning', price: 'From $250', icon: '✨', desc: 'Intensive top-to-bottom home cleaning' },
                { name: 'Office Cleaning', price: 'From $150', icon: '🏢', desc: 'Commercial and office space cleaning' },
                { name: 'Move In/Out', price: 'From $300', icon: '📦', desc: 'Comprehensive move-in/move-out cleaning' },
                { name: 'Carpet Cleaning', price: 'From $150', icon: '🧹', desc: 'Professional carpet and upholstery cleaning' },
                { name: 'Window Cleaning', price: 'From $100', icon: '🪟', desc: 'Interior and exterior window cleaning' },
                { name: 'Post-Construction', price: 'From $400', icon: '🔨', desc: 'Post-renovation cleanup services' },
                { name: 'Disinfection', price: 'From $180', icon: '🦠', desc: 'Deep sanitization and disinfection' },
              ].map((service) => (
                <div key={service.name} className="card">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                  <p className="text-primary-600 font-semibold">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/quote" className="btn-primary text-lg">
                Get Personalized Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Neighborhoods We Serve in {location.city}
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {location.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition">
                  <span className="font-medium text-gray-800">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Serving all zip codes: {location.zipCodes.join(', ')}
            </p>
          </div>
        </section>

        {/* Why Choose Local Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Local {location.city} Cleaners?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Verified & Trusted</h3>
                <p className="text-gray-600">
                  All our {location.city} cleaning companies are verified, insured, and highly rated by local customers.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                <p className="text-gray-600">
                  Local cleaners can respond quickly to your needs with same-day or next-day availability.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Best Prices</h3>
                <p className="text-gray-600">
                  Compare quotes from multiple {location.city} cleaners to get the best deal for your budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions - {location.city} Cleaning Services
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: `How much does house cleaning cost in ${location.city}?`,
                  a: `The average cost of house cleaning in ${location.city} ranges from $120-$300 depending on home size and cleaning type. Deep cleaning typically costs more than standard cleaning.`,
                },
                {
                  q: `Are cleaning services in ${location.city} insured?`,
                  a: `Yes, all verified cleaners on our platform carry liability insurance and workers compensation for your protection.`,
                },
                {
                  q: `How do I book a cleaning service in ${location.city}?`,
                  a: `Simply fill out our instant quote form, select your services, and choose from available local cleaners. You can book online in minutes!`,
                },
                {
                  q: `What areas of ${location.city} do you serve?`,
                  a: `We serve all neighborhoods in ${location.city} including ${location.neighborhoods.slice(0, 3).join(', ')}, and more. Coverage includes all zip codes: ${location.zipCodes.join(', ')}.`,
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Cleaner in {location.city}?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Get free instant quotes from verified local cleaning professionals
            </p>
            <Link
              href="/quote"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:shadow-2xl transition"
            >
              Get Free Quote Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    city: slug,
  }));
}
