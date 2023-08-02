import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";

export default function Navbar() {

  return (
    <nav className="">
      <Link href='/'>Home</Link>
      <Link href=''>Blog</Link>
      {/* <Link href=''>Courses</Link> */}
      <Link href=''>Projects</Link>
      <Link href=''>About</Link>
      <Link href=''>Contact</Link>
      <ThemeToggleIcon />
    </nav>
  )
}