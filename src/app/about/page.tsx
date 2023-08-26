import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { skills } from "./skills";
import Skill from "../components/Skill";
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
          <Image src={'/image.png'} height={192} width={192} alt="Tushar Sharma" />
          <div className="text-3xl mt-2 font-semibold">Tushar Sharma</div>
          <div className=" text-zinc-600 dark:text-zinc-400">Software Engineer</div>
        </div>
        <div className="xl:w-[70%] mt-12 xl:mt-0">
          I am a Software Engineer specialized in front end.
          <br />
          <br />
          I&#39;m an engineer who loves to create things with technology. I&#39;m fascinated by the power and possibilities that engineering offers to solve real-world problems and improve lives. During my studies, I participated in several hackathons and tech fests where I learned new skills and built innovative projects. I also interned at various startups where I contributed to their growth and success by working on different technologies.
          <br />
          <br />
          Currently, I&#39;m working as a contractor software engineer mostly on frontend based projects with a little bit of backend here and there.
          <br />
          <br />
          Outside of my career, I enjoy challenging myself with intense workouts and learning new songs on my guitar. I&#39;m a nerd who likes to learn new things every day. I&#39;m always curious about the science and history behind everything I watch and read.
          <br />
          <br />
          I also like to travel and explore new places. I love doing fun things outside, such as running, going out on walks in parks, and appreciating nature and wildlife. I&#39;m fond of animals too and enjoy spending time with them.
          <br />
          <br />
          I like to socialize with amazing people and learn from their perspectives. I believe every person, irrespective of who they are, have a story to tell.
          <br />
          <br />
          
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