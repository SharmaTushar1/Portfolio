import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-6xl font-bold">About</h1>
      <hr className="mt-4 bg-gray-300 dark:invert border-0 pt-[1px]"/>
      <div className="flex flex-col xl:flex-row w-full mt-4">
        {/* Profile pic here */}
        <div className="flex flex-col mx-auto justify-center items-center">
          <Image src={'/../favicon.ico'} height={192} width={192} alt="Tushar Sharma" />
          <div>Tushar Sharma</div>
          <div>Software Engineer</div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}