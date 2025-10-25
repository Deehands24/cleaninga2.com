'use client';

import { useState } from 'react';
import { AFFILIATE_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/affiliate-products';
import Image from 'next/image';

export default function AffiliatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? AFFILIATE_PRODUCTS
    : AFFILIATE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Best Cleaning Products & Supplies
          </h1>
          <p className="text-xl text-gray-600">
            Professional-grade cleaning products recommended by experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Affiliate Programs Info Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Top Affiliate Partners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-bold mb-2">Amazon Associates</h3>
              <p className="text-sm text-blue-100">Wide selection of cleaning products with fast shipping</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-bold mb-2">Grove Collaborative</h3>
              <p className="text-sm text-blue-100">Eco-friendly products with subscription options</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-bold mb-2">iRobot</h3>
              <p className="text-sm text-blue-100">Premium robot vacuums and smart cleaning tech</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
              )}

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t">
                <span className="text-2xl font-bold text-primary-600">
                  ${product.price}
                </span>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-sm
                           transition-all duration-300 hover:bg-primary-700 hover:shadow-lg
                           hover:-translate-y-0.5"
                >
                  View Deal
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Affiliate Info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More Great Cleaning Affiliate Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">MyCleaningProducts</h3>
              <p className="text-sm text-gray-600 mb-2">Up to 30% commission on industrial cleaning supplies</p>
              <p className="text-primary-600 font-semibold text-sm">High AOV: $500-$5000</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">SOLI Cleaning</h3>
              <p className="text-sm text-gray-600 mb-2">20% commission on eco-friendly products</p>
              <p className="text-primary-600 font-semibold text-sm">Recurring commissions</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Clean Fortune</h3>
              <p className="text-sm text-gray-600 mb-2">10-17.5% recurring monthly commissions</p>
              <p className="text-primary-600 font-semibold text-sm">Cleaning service subscriptions</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">KÄRCHER</h3>
              <p className="text-sm text-gray-600 mb-2">5% commission on pressure washers & equipment</p>
              <p className="text-primary-600 font-semibold text-sm">Premium brand recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
