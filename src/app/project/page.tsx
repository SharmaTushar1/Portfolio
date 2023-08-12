import { Metadata } from "next";
import Projects from "./components/Projects";
import { allProjectsThumbnail } from "./projects_data";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: 'Projects - Tushar Sharma',
  description: "Projects by Tushar Sharma",
};

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-6xl font-bold">
        Projects
      </h1>
      <hr className="mt-4 bg-gray-300 dark:invert border-0 pt-[1px]"/>
      <Projects thumbnailsArray = {allProjectsThumbnail} />
      <div className="mb-4 mt-4">
        <Footer />
      </div>
    </div>
  );
}