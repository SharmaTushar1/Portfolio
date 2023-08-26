import Skill from "@/app/components/Skill";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <div>
      <h1 className="text-4xl">{project.title}</h1>
      <div>{project.detailedDescription}</div>
      <h2>Stack</h2>
      <div className="flex flex-wrap">
        {project.stack.map((tech => (
          <Skill key={tech.skillName} skillBgColor={tech.skillBgColor} skillName={tech.skillName} />
        )))}
      </div>
      <h2>Deployments</h2>
      <Link href={project.deploymentLink as string}>Live link</Link>
      <h2>Screenshots</h2>
      <div className="flex flex-col sm:flex-row sm:overflow-x-scroll">
        {
          project.screenshots?.map(screenshotLink => (
            <Image key={screenshotLink} src={screenshotLink} alt="screenshot" width={400} height={800} className="sm:mr-4" />
          ))
        }
      </div>
    </div>
  );
}