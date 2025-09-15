import './globals.css';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Growth.meta | Digital Marketing Agency',
  description: 'A full-service digital marketing agency that helps businesses grow and succeed online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F8F7F4] dark:bg-[#1a202c] text-[#1a202c] dark:text-[#F8F7F4]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
