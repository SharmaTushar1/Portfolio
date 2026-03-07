import ProjectThumbnail from './ProjectThumbnail';

type Props = {
  thumbnailsArray: ProjectThumbnail[];
  projectsArray?: Project[];
};

export default function Projects({ thumbnailsArray, projectsArray }: Props) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {thumbnailsArray.map((thumbnail, index) => (
        <ProjectThumbnail
          key={thumbnail.title}
          project={thumbnail}
          fullProject={projectsArray?.[index]}
        />
      ))}
    </div>
  );
}
