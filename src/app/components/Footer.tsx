import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Growth.meta</h3>
                    <p className="text-gray-400">A full-service digital marketing agency that helps businesses grow and succeed online.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates and marketing tips.</p>
                    <form>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none" />
                            <button type="submit" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-r-md">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Growth.meta. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
