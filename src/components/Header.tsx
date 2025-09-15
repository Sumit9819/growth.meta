
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            My Awesome Website
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-red-500 hover:text-white transition-colors">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
