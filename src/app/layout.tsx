import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import {ThemeProvider} from './Providers';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Tushar Sharma',
  description: 'Tushar Sharma portfolio. Made with ♥ by Tushar Sharma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-slate-200 dark:bg-slate-800 text-black dark:text-white'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
