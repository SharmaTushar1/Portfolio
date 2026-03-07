import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';
import Navbar from './components/Navbar';
import { ThemeProvider } from './Providers';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavbarMobile from './components/NavbarMobile';

config.autoAddCss = false;

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tushar Sharma — Software Engineer',
  description: 'Tushar Sharma — Software Engineer at C3.AI. Full-stack development, data platforms, and product experience. Career, projects, and contact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-[rgb(var(--color-bg))] text-zinc-900 dark:text-zinc-100 font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <NavbarMobile />
            <main className="flex-1 container-content pt-20 sm:pt-24 pb-section">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
