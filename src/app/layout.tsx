import { Bricolage_Grotesque, Manrope, Inter } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={`${bricolage.variable} ${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}