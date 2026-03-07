'use client';

import Link from 'next/link';
import ThemeToggleIcon from './ThemeToggleIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './NavbarMobile.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

function Drawer() {
  const hideNavbar = () => {
    const nav_drawer = document.getElementById('nav-drawer');
    nav_drawer?.classList.add('hidden');
    nav_drawer?.classList.add('translate-x-full');
    nav_drawer?.classList.remove('translate-x-0');
    document.getElementById('navbar-toggle')?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-y-hidden');
  };

  return (
    <div
      className="flex hidden justify-between translate-x-full w-screen transition ease-in-out duration-300 h-screen top-0 bottom-0 right-0 absolute bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 p-6 pt-20"
      id="nav-drawer"
    >
      <div className="flex flex-col gap-4 pl-2 w-full" id="nav-drawer-child">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-xl font-heading font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            onClick={hideNavbar}
          >
            {label}
          </Link>
        ))}
      </div>
      <button
        type="button"
        aria-label="Close menu"
        className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        onClick={hideNavbar}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={faClose} />
      </button>
    </div>
  );
}

export default function NavbarMobile() {
  const showNavbar = () => {
    const nav_drawer = document.getElementById('nav-drawer');
    nav_drawer?.classList.remove('hidden');
    nav_drawer?.classList.remove('translate-x-full');
    nav_drawer?.classList.add('translate-x-0');
    document.getElementById('navbar-toggle')?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-y-hidden');
  };

  return (
    <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800" id="mobile-nav">
      <div className="container-content flex flex-row-reverse items-center h-16">
        <div className="flex items-center gap-3">
          <ThemeToggleIcon />
          <button
            type="button"
            aria-label="Open menu"
            id="navbar-toggle"
            className="p-2 text-zinc-600 dark:text-zinc-400"
            onClick={showNavbar}
          >
            <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
          </button>
        </div>
      </div>
      <Drawer />
    </div>
  );
}
