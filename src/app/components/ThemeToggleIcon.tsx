'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes';

export default function ThemeToggleIcon() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  if (!mounted) {
    return (
      <div className="mr-4 mt-1 sm:mr-0 sm:mt-0 z-10 w-6 h-6 flex items-center justify-center" aria-hidden>
        <FontAwesomeIcon className="w-6 h-6 sm:w-6 sm:h-6 text-zinc-400" icon={faMoon} />
      </div>
    );
  }

  return (
    <div className="cursor-pointer mr-4 mt-1 sm:mr-0 sm:mt-0 z-10">
      {isDark
        ? <FontAwesomeIcon className="w-6 h-6 sm:w-6 sm:h-6" icon={faSun} onClick={() => setTheme('light')} aria-label="Switch to light mode"/>
        : <FontAwesomeIcon className="w-6 h-6 sm:w-6 sm:h-6" icon={faMoon} onClick={() => setTheme('dark')} aria-label="Switch to dark mode"/>}
    </div>
  );
}