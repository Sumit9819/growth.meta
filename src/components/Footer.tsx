import Link from 'next/link';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold">Growth.meta</Link>
            <p className="mt-2 text-gray-500 dark:text-gray-400">A full-service digital marketing agency.</p>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Our Story</Link></li>
                <li><Link href="/team" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Our Team</Link></li>
                <li><Link href="/careers" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Growth.meta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
