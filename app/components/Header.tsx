'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Growth Meta
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <Link href="/get-started" className="bg-green-500 text-white px-6 py-2 rounded-md">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
