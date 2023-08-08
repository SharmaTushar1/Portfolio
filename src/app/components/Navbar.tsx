import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";

export default function Navbar() {

  return (
    <nav className="hidden full  sm:flex justify-end text-lg font-normal">
      <div className="flex w-fit pt-8">
        <Link href='/' className="mx-4">Home</Link>
        <Link href='/blog' className="mx-4">Blog</Link>
        {/* <Link href='' className="mx-4">Courses</Link> */}
        <Link href='/project' className="mx-4">Projects</Link>
        <Link href='/about' className="mx-4">About</Link>
        <Link href='/contact' className="mx-4">Contact</Link>
        <ThemeToggleIcon />
      </div>
    </nav>
  );
}