'use client';

import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./NavbarMobile.css";

export function Drawer() {
  return (
    <div className="flex w-screen h-screen flex-col translate-x-full top-0 bottom-0 right-0 absolute bg-transparent-zinc-100 dark:bg-transparent-zinc-900"id="nav-drawer">
      <Link href='/' className="mx-4">Home</Link>
      <Link href='/blog' className="mx-4">Blog</Link>
      <Link href='' className="mx-4">Courses</Link>
      <Link href='/project' className="mx-4">Projects</Link>
      <Link href='/about' className="mx-4">About</Link>
      <Link href='/contact' className="mx-4">Contact</Link>
    </div>
  );
}

export default function NavbarMobile() {

  const [isVisible, setIsVisible] = useState(false);
  const nav_drawer = document.getElementById("nav-drawer");
  nav_drawer?.classList.toggle('translate-x-full');
  nav_drawer?.classList.toggle('translate-x-0');


  const showNavbar = () => {
    setIsVisible((prev) => !prev);
    document.body.classList.toggle('overflow-y-hidden');
    console.log("Show navbar");
  };

  return (
    <div className="">
      <div className="flex w-full flex-row-reverse sm:hidden mt-4">
        <div className="flex items-center justify-center">
          <ThemeToggleIcon />
          <FontAwesomeIcon className='w-6 h-6 sm:w-6 sm:h-6 cursor-pointer z-20' icon={!isVisible?faBars:faClose} onClick={() => showNavbar()} />
        </div>
      </div>
      <Drawer />
    </div>
  );
}