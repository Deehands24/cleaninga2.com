'use client';

import { useState } from 'react';
import ListingCard from '@/components/directory/ListingCard';
import { DIRECTORY_LISTINGS } from '@/lib/directory-data';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');

  // Get unique service areas
  const serviceAreas = ['all', ...new Set(DIRECTORY_LISTINGS.flatMap(l => l.serviceArea))];

  // Filter listings
  const filteredListings = DIRECTORY_LISTINGS.filter(listing => {
    const matchesSearch = listing.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesArea = selectedArea === 'all' || listing.serviceArea.includes(selectedArea);

    return matchesSearch && matchesArea;
  });

  // Sort: featured first, then by rating
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating - a.rating;
  });

  return (
    <div className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Cleaning Services Near You
          </h1>
          <p className="text-xl text-gray-600">
            Browse verified cleaning companies in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by company name or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="input-field"
              >
                {serviceAreas.map(area => (
                  <option key={area} value={area}>
                    {area === 'all' ? 'All Areas' : area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-gray-600">
            Found {sortedListings.length} cleaning {sortedListings.length === 1 ? 'company' : 'companies'}
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sortedListings.map((listing, index) => (
            <div
              key={listing.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {/* List Your Business Section */}
        <div id="list-business" className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              List Your Cleaning Business
            </h2>
            <p className="text-xl text-primary-100">
              Join our directory and connect with thousands of potential customers
            </p>
          </div>

          <div id="pricing" className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Free Tier */}
            <div className="bg-white text-gray-900 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-4xl font-bold text-primary-600">$0</p>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Company name & description</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Star rating display</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Service list</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Service area</span>
                </li>
              </ul>
              <a
                href="mailto:management@ges-development.com?subject=Free Directory Listing"
                className="block bg-gray-200 text-gray-900 py-3 px-6 rounded-lg text-center font-semibold
                         transition-all duration-300 hover:bg-gray-300"
              >
                Get Started
              </a>
            </div>

            {/* Premium Tier */}
            <div className="bg-white text-gray-900 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 relative border-4 border-yellow-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-4xl font-bold text-primary-600">$49</p>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Phone number display</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Website link</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Company logo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Priority placement</span>
                </li>
              </ul>
              <a
                href="mailto:management@ges-development.com?subject=Premium Directory Listing - $49/month"
                className="block bg-primary-600 text-white py-3 px-6 rounded-lg text-center font-semibold
                         transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
              >
                Upgrade Now
              </a>
            </div>

            {/* Featured Tier */}
            <div className="bg-white text-gray-900 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Featured</h3>
                <p className="text-4xl font-bold text-primary-600">$99</p>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold">Everything in Premium, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">⭐ Featured badge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Top of search results</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Social media links</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Homepage feature rotation</span>
                </li>
              </ul>
              <a
                href="mailto:management@ges-development.com?subject=Featured Directory Listing - $99/month"
                className="block bg-yellow-400 text-yellow-900 py-3 px-6 rounded-lg text-center font-semibold
                         transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg"
              >
                Go Featured
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
