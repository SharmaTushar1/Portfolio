import Image from "next/image";

export default function ProjectThumbnail({ project }: { project: ProjectThumbnail }) {
  return (
    <div className="mb-4 w-full md:w-[48%]">
      {/* Image */}
      <div>
        <Image
          src={"/banner.webp"}
          alt={`${project.title} Thumbnail`}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h2>{project.title}</h2>
    </div>
  );
}