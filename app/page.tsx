import Link from 'next/link';
import Testimonials from '@/components/ui/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Professional
              <span className="text-primary-600"> Cleaning Services</span>
              <br />
              Near You
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant quotes, compare top-rated cleaning companies, and discover the best cleaning products.
              All in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4 inline-block">
                Get Free Instant Quote
              </Link>
              <Link href="/directory" className="btn-secondary text-lg px-8 py-4 inline-block">
                Browse Cleaners
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose CleaningA2?</h2>
          <p className="section-subtitle text-center">
            Your trusted partner for all cleaning needs
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="card group">
              <div className="text-primary-600 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Quotes</h3>
              <p className="text-gray-600">
                Get accurate pricing instantly by selecting from our pre-priced services.
                No waiting, no surprises.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group">
              <div className="text-primary-600 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Verified Companies</h3>
              <p className="text-gray-600">
                Browse our directory of verified, top-rated cleaning companies with real customer reviews.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group">
              <div className="text-primary-600 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Best Products</h3>
              <p className="text-gray-600">
                Discover top-rated cleaning supplies and equipment recommended by professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Popular Cleaning Services</h2>
          <p className="section-subtitle text-center">
            Choose from a wide range of professional cleaning services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'House Cleaning', price: 'From $120', icon: '🏠' },
              { name: 'Deep Cleaning', price: 'From $250', icon: '✨' },
              { name: 'Office Cleaning', price: 'From $150', icon: '🏢' },
              { name: 'Carpet Cleaning', price: 'From $150', icon: '🧹' },
              { name: 'Window Cleaning', price: 'From $100', icon: '🪟' },
              { name: 'Move In/Out', price: 'From $300', icon: '📦' },
              { name: 'Post-Construction', price: 'From $400', icon: '🔨' },
              { name: 'Disinfection', price: 'From $180', icon: '🦠' },
            ].map((service) => (
              <div key={service.name} className="card text-center group cursor-pointer">
                <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-125">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-primary-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary text-lg">
              View All Services & Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get your free instant quote in less than 2 minutes
          </p>
          <Link
            href="/quote"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block
                     transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Get Your Free Quote Now
          </Link>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Are You a Cleaning Business?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Join our directory and connect with thousands of potential customers looking for your services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Free basic listing with company profile</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium plans include phone number, website link, and featured placement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Star rating system to showcase your excellence</span>
                </li>
              </ul>
              <Link href="/directory#list-business" className="btn-primary">
                List Your Business
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-bold text-lg">Free Tier</h4>
                  <p className="text-gray-600">Basic listing with company name, description, and star rating</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-bold text-lg">Premium - $49/month</h4>
                  <p className="text-gray-600">Everything in Free + phone number, website link, logo, and priority placement</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-lg">Featured - $99/month</h4>
                  <p className="text-gray-600">Everything in Premium + featured badge, top placement, and social media links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
