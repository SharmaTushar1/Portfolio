'use client';

import Link from 'next/link';
import ThemeToggleIcon from './ThemeToggleIcon';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`hidden sm:block fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container-content flex justify-end items-center h-16 sm:h-18">
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === href || (href !== '/' && pathname.startsWith(href))
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggleIcon />
        </div>
      </div>
    </nav>
  );
}
