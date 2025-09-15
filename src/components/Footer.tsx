import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Growth.meta</h3>
            <p className="text-gray-600 dark:text-gray-300">A full-service digital marketing agency that helps businesses grow and succeed online.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#seo" className="hover:text-primary transition-colors">SEO</Link></li>
              <li><Link href="/services#content-marketing" className="hover:text-primary transition-colors">Content Marketing</Link></li>
              <li><Link href="/services#social-media" className="hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link href="/services#ppc" className="hover:text-primary transition-colors">PPC</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"></a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"></a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Growth.meta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
