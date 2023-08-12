import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <div>{project.detailedDescription}</div>
      <h2>Stack</h2>
      <div>
        {project.stack.map((tech => (
          <span key={tech}>{tech}</span>
        )))}
      </div>
      <h2>Deployments</h2>
      <Link href={project.deploymentLink as string}>Live link</Link>
      <h2>Screenshots</h2>
      <div>
        {
          project.screenshots?.map(screenshotLink => (
            <Image key={screenshotLink} src={screenshotLink} alt="screenshot" width={100} height={100} />
          ))
        }
      </div>
    </div>
  );
}