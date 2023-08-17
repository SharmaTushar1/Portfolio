import Image from "next/image";
import Link from "next/link";

export default function ProjectThumbnail({ project }: { project: ProjectThumbnail }) {
  return (
    <Link href={`/project/${project.title.split(' ').join('-')}`} className="mb-12 w-full md:w-[48%]">
      {/* Image */}
      <div>
        <Image
          src={project.image}
          alt={`${project.title} Thumbnail`}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h2>{project.title}</h2>
      <div>{project.briefDescription}</div>
      <span>Click to see more &#x2192;</span>
    </Link>
  );
}