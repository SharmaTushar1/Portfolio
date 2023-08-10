import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-full overflow-y-hidden">
      <div className="mt-36 sm:mt-20 mx-auto md:ml-8 lg:ml-16">
        <div className="text-4xl lg:text-6xl font-medium">
          Hi, I am Tushar
        </div>
        <div className="text-xl lg:text-3xl mt-3">
          Sofware Engineer
        </div>
        <div className="mt-3 lg:text-lg">
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
      <div className=" mt-[17rem] mb-[2rem]">
        <Footer />
      </div>
    </main>
  );
}
