import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-full overflow-y-hidden">
      <div className="mt-12">
        <div className="text-2xl md:text-3xl lg:text-5xl font-medium">
          Hi, I am Tushar
        </div>
        <div className="text-xl mt-2">
          Sofware Engineer
        </div>
        <div className="mt-2">
          Read&nbsp;
          <Link href='/about' className="bg-red-300">
            about me
          </Link>
          &nbsp;or&nbsp;
          <Link href='/contact' className="bg-red-300">
            contact me
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
