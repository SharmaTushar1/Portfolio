import { allProjects } from "../projects_data";
import { notFound } from "next/navigation";
import ProjectDetailPage from "./components/ProjectDetailPage";
import Footer from "@/app/components/Footer";

// TODO: Covert this SSR to SSG

export function generateMetadata({ params }: {params: { projectId: string}}) {

  const clickedProject = allProjects.filter(project => (params.projectId === project.title.split(' ').join('-')))[0];

  if (!clickedProject) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: `${clickedProject.title} - Tushar Sharma`,
  };
}

export default function Project({params}: {params: {projectId: string}}) {
  const clickedProject = allProjects.filter(project => (params.projectId === project.title.split(' ').join('-')))[0]; // get the project that we clicked on first

  if (!clickedProject) return notFound();

  return (
    <div className="flex flex-col w-full">
      <ProjectDetailPage project={clickedProject} />
      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}