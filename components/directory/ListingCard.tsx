'use client';

import { DirectoryListing } from '@/lib/types';

interface ListingCardProps {
  listing: DirectoryListing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className={`card relative ${listing.featured ? 'border-2 border-yellow-400' : ''}`}>
      {/* Featured Badge */}
      {listing.featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm">
          ⭐ Featured
        </div>
      )}

      {/* Company Name & Verified Badge */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          {listing.companyName}
          {listing.verified && (
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </h3>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < Math.floor(listing.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="font-bold text-gray-900">{listing.rating}</span>
        <span className="text-gray-500">({listing.reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{listing.description}</p>

      {/* Services */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Services:</p>
        <div className="flex flex-wrap gap-2">
          {listing.services.slice(0, 4).map((service) => (
            <span
              key={service}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
            >
              {service}
            </span>
          ))}
          {listing.services.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              +{listing.services.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Service Area */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-1">Service Area:</p>
        <p className="text-sm text-gray-600">{listing.serviceArea.join(', ')}</p>
      </div>

      {/* Contact Information (Premium) */}
      {listing.isPaid && (
        <div className="border-t pt-4 mt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {listing.phoneNumber && (
              <a
                href={`tel:${listing.phoneNumber}`}
                className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-center font-semibold
                         transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
              >
                📞 {listing.phoneNumber}
              </a>
            )}
            {listing.website && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border-2 border-primary-600 text-primary-600 py-2 px-4 rounded-lg text-center font-semibold
                         transition-all duration-300 hover:bg-primary-50 hover:shadow-lg"
              >
                🌐 Visit Website
              </a>
            )}
          </div>
          {listing.socialMedia && (
            <div className="flex gap-3 mt-3 justify-center">
              {listing.socialMedia.facebook && (
                <a
                  href={listing.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {listing.socialMedia.instagram && (
                <a
                  href={listing.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Free Tier CTA */}
      {!listing.isPaid && (
        <div className="border-t pt-4 mt-4 text-center">
          <a
            href="/quote"
            className="inline-block bg-primary-600 text-white py-2 px-6 rounded-lg font-semibold
                     transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
          >
            Get Quote
          </a>
          <p className="text-xs text-gray-500 mt-2">
            Contact information available on premium listing
          </p>
        </div>
      )}
    </div>
  );
}
