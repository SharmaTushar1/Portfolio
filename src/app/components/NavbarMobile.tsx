'use client';

import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./NavbarMobile.css";

export function Drawer() {

  const hideNavbar = () => {
    // const mobile_nav = document.getElementById('mobile-nav');
    const nav_drawer = document.getElementById("nav-drawer");
    nav_drawer?.classList.add('hidden'); // FIXME: Instead of adding this try to add a smooth transition but I'll have to remove this for that but that is causing scrolling on x axis bug rn.
    nav_drawer?.classList.add('translate-x-full');
    nav_drawer?.classList.remove('translate-x-0');
    document.getElementById('navbar-toggle')?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-y-hidden');
  };

  return (
    <div className="flex hidden justify-between translate-x-full w-screen transition ease-in-out duration-1000 h-screen top-0 bottom-0 right-0 absolute bg-transparent-zinc-100 dark:bg-transparent-zinc-900 p-4 pl-4" id="nav-drawer">
      <div className="flex flex-col justify-center items-left pl-4 w-full" id="nav-drawer-child">
        <Link href='/' className="mx-4 text-3xl font-bold mb-4">Home</Link>
        <Link href='/blog' className="mx-4 text-3xl font-bold mb-4">Blog</Link>
        {/* <Link href='' className="mx-4 text-3xl font-bold mb-4">Courses</Link> */}
        <Link href='/project' className="mx-4 text-3xl font-bold mb-4">Projects</Link>
        <Link href='/about' className="mx-4 text-3xl font-bold mb-4">About</Link>
        <Link href='/contact' className="mx-4 text-3xl font-bold mb-4">Contact</Link>
      </div>
      <FontAwesomeIcon className="w-6 h-6 mr-4 mt-1 cursor-pointer" icon={faClose} onClick={() => hideNavbar()} />
    </div>
  );
}

export default function NavbarMobile() {

  const showNavbar = () => {
    // const mobile_nav = document.getElementById('mobile-nav');
    const nav_drawer = document.getElementById("nav-drawer"); //! Don't change. Won't work if it's outside the scope as the nav_drawer is not rendered yet.
    nav_drawer?.classList.remove('hidden');
    nav_drawer?.classList.remove('translate-x-full');
    nav_drawer?.classList.add('translate-x-0');
    document.getElementById('navbar-toggle')?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-y-hidden');
  };

  return (
    <div className="sm:hidden" id="mobile-nav">
      <div className="flex w-full flex-row-reverse mt-4">
        <div className="flex items-center justify-center">
          <ThemeToggleIcon />
          <FontAwesomeIcon className='w-6 h-6 cursor-pointer' id={"navbar-toggle"} icon={faBars} onClick={() => showNavbar()} />
        </div>
      </div>
      <Drawer />
    </div>
  );
}