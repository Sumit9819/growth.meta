import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function GetStartedPage() {
  return (
    <div className="py-32 text-center bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <h1 className="text-6xl font-extrabold text-balance mb-4">Ready to Grow Your Business?</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance mb-12">Let&apos;s talk about how Growth.meta can help you achieve your marketing goals. Get in touch with us today to schedule a free consultation.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg glow-effect">
                Contact Us <ArrowRightIcon className="w-5 h-5 ml-2"/>
            </Link>
        </div>
    </div>
  );
}
