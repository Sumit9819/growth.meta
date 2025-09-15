import Link from 'next/link';

export function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            My Blog
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/authors" className="text-gray-600 hover:text-gray-900">
              Authors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
