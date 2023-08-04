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
      <body className='bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <div className='mt-16'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
