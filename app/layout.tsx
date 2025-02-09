import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {yekanBakh} from './font'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Persian Website',
  description: 'A beautiful Persian website with RTL support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}