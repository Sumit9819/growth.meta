'use client'

import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-lg dark:bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold glow-effect">
            Growth.meta
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors glow-effect">Services</Link>
            <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors glow-effect">Blog</Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors glow-effect">Contact</Link>
          </nav>
          <div className="flex items-center">
            <ThemeToggleButton />
            <Link href="/get-started" className="ml-4 px-6 py-3 bg-primary text-white font-semibold rounded-full glow-effect">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
