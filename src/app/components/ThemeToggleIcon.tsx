'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes';

export default function ThemeToggleIcon() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className='cursor-pointer'>
      {isDarkMode
        ? <FontAwesomeIcon icon={faSun} onClick={() => {setTheme("light"); setIsDarkMode(prev => !prev);}}/>
        : <FontAwesomeIcon icon={faMoon} onClick={() => {setTheme("dark"); setIsDarkMode(prev => !prev);}} />
      }
    </div>
  );
}