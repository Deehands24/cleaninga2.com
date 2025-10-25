import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              CleaningA2.com
            </h3>
            <p className="text-gray-400">
              Your trusted platform for finding professional cleaning services and products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/directory" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Find Cleaners
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cleaning Products
                </Link>
              </li>
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/directory#list-business" className="text-gray-400 hover:text-primary-400 transition-colors">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link href="/directory#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a href="mailto:management@ges-development.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: <a href="mailto:management@ges-development.com" className="hover:text-primary-400 transition-colors">
                  management@ges-development.com
                </a>
              </li>
              <li className="text-gray-400">
                Business Hours: Mon-Fri 9AM-5PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CleaningA2.com. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Part of the GES Development Network
          </p>
        </div>
      </div>
    </footer>
  );
}
