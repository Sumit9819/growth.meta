import './globals.css';
import { Header } from '@/app/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center py-4 text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
