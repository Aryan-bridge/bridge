'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/Original_Logo.svg"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destination" className="text-gray-700 hover:text-orange-500 transition-colors">
              destination
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">
              services
            </a>
            <a href="#ielts" className="text-gray-700 hover:text-orange-500 transition-colors">
              IELTS
            </a>
            <a href="#study-abroad" className="text-gray-700 hover:text-orange-500 transition-colors">
              study abroad steps
            </a>
            <a href="#what-we-do" className="text-gray-700 hover:text-orange-500 transition-colors">
              what we do
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
              Get Started
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#destination" className="text-gray-700 hover:text-orange-500 transition-colors">
                destination
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">
                services
              </a>
              <a href="#ielts" className="text-gray-700 hover:text-orange-500 transition-colors">
                IELTS
              </a>
              <a href="#study-abroad" className="text-gray-700 hover:text-orange-500 transition-colors">
                study abroad steps
              </a>
              <a href="#what-we-do" className="text-gray-700 hover:text-orange-500 transition-colors">
                what we do
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
                  Get Started
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded transition-colors">
                  Contact
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}