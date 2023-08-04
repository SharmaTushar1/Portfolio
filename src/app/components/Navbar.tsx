import Link from "next/link";
import ThemeToggleIcon from "./ThemeToggleIcon";

export default function Navbar() {

  return (
    <nav className="hidden full  sm:flex justify-end lg:pr-56 text-lg font-normal">
      <div className="flex w-fit pr-8 pt-8">
        <Link href='/' className="mx-4">Home</Link>
        <Link href='' className="mx-4">Blog</Link>
        {/* <Link href='' className="mx-4">Courses</Link> */}
        <Link href='' className="mx-4">Projects</Link>
        <Link href='' className="mx-4">About</Link>
        <Link href='' className="mx-4">Contact</Link>
        <ThemeToggleIcon />
      </div>
    </nav>
  );
}