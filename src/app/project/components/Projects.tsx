import ProjectThumbnail from "./ProjectThumbnail";

type Props = {
  thumbnailsArray: ProjectThumbnail[],
  // projectsArray: project[]
}

export default function Projects({thumbnailsArray}: Props) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between mt-12">
      {
        thumbnailsArray.map(project => (
          <ProjectThumbnail key = {project.title} project={project} />
        ))
      }
    </div>
  );
}