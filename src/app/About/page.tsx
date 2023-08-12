import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { skills } from "./skills";
import Skill from "./components/Skill";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Tushar Sharma',
  description: "About page of Tushar Sharma's portfolio",
};

export default function About() {

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-6xl font-bold">About</h1>
      <hr className="mt-4 bg-gray-300 dark:invert border-0 pt-[1px]"/>
      <div className="flex flex-col xl:flex-row w-full mt-4 p-4">
        {/* Profile pic here */}
        <div className="flex flex-col mx-auto items-center">
          <Image src={'/../favicon.ico'} height={192} width={192} alt="Tushar Sharma" />
          <div className="text-3xl mt-2 font-semibold">Tushar Sharma</div>
          <div>Software Engineer</div>
        </div>
        <div className="xl:w-[70%]">
          Tushar Sharma is a Software Engineer specialized in front end who completed his computer science degree in 2023.
          <br />
          <br />
          He thinks of engineering as an art and really feels amazed by the crazy things and power we hold as engineers. During his studies. He participated in several hackathons and tech fests. He also interned at various startups in his Junior and Senior year of college where he got a chance to work on various techs.
          <br />
          <br />
          Currently, he&#39;s working as a contractor software engineer mostly on frontend based projects with a little bit of backend here and there.
          <br />
          <br />
          Outside of his career, he likes to workout and play guitar on his free time. He was a nerd ever since as a kid and love watching educational videos. I think of everything like an art. Whether it be a beautiful night sky or a good code. A piece of tech or even some random pattern on the sand. I am just an appreciator of art.
          <div className="mt-4">
            <Link href='/resume' className=" underline">
              See Resume
            </Link>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">
              Skills
            </h1>
            {
              <div className="flex flex-wrap">
                {skills.map( skill => (
                  <Skill key={skill.skillName} skillName={skill.skillName} skillBgColor={skill.skillBgColor} />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
      <div className="mt-4 xl:mt-24 xl:mb-4 mb-4">
        <Footer />
      </div>
    </div>
  );
}