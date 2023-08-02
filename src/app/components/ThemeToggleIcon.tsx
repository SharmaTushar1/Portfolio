'use client'

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes';

export default function ThemeToggleIcon() {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false)

  console.log("theme => ", theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className='cursor-pointer'>
      The current theme is {theme}
      {isDarkMode
      ? <FontAwesomeIcon icon={faSun} onClick={() => {setTheme("light"); setIsDarkMode(prev => !prev)}}/>
      : <FontAwesomeIcon icon={faMoon} onClick={() => {setTheme("dark"); setIsDarkMode(prev => !prev)}} />
    }
    </div>
  )
}