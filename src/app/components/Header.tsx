'use client';

import Link from 'next/link';
import { HomeIcon, WrenchScrewdriverIcon, NewspaperIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { ThemeToggleButton } from './ThemeToggleButton';

export function Header() {
  return (
    <header className="bg-transparent py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-6">
          <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white">
            Growth.meta
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/services" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <WrenchScrewdriverIcon className="h-5 w-5" />
              <span>Services</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <NewspaperIcon className="h-5 w-5" />
              <span>Blog</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <PhoneIcon className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <Link href="/get-started" className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold glow-effect lifted-shadow">
              <span>Get Started</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
