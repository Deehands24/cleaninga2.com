'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-primary-600 transition-transform duration-300 group-hover:scale-105">
                CleaningA2.com
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/quote"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/directory"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Find Cleaners
            </Link>
            <Link
              href="/affiliates"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Cleaning Products
            </Link>
            <Link
              href="/quote"
              className="btn-primary"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/quote"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              Get Quote
            </Link>
            <Link
              href="/directory"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              Find Cleaners
            </Link>
            <Link
              href="/affiliates"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              Cleaning Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
