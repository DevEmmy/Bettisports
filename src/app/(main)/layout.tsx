import type { Metadata } from 'next';
import '.././globals.css';
import TopNav from '@/components/TopNav.tsx';
import LiveScoreHighlight from '@/components/LiveScoreHighlight';
import MainNav from '@/components/MainNav';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <LiveScoreHighlight />

      <div className='hidden md:flex'>
        <MainNav />
      </div>

      {children}
      <Footer />
    </>
  );
}
