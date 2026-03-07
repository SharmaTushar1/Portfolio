import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: ProjectThumbnail;
  fullProject?: Project;
};

export default function ProjectThumbnail({ project, fullProject }: Props) {
  const slug = project.title.split(' ').join('-');
  const hasLive = fullProject?.deploymentLink && fullProject.deploymentLink.startsWith('http');
  const hasRepo = Boolean(fullProject?.repoLink);

  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900/50 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
      <Link href={`/project/${slug}`} className="block">
        <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
            {project.briefDescription}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        <Link
          href={`/project/${slug}`}
          className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
        >
          View project
        </Link>
        {hasLive && (
          <>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <a
              href={fullProject!.deploymentLink!.startsWith('http') ? fullProject!.deploymentLink : `https://${fullProject!.deploymentLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
            >
              Live site
            </a>
          </>
        )}
        {hasRepo && (
          <>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <a
              href={fullProject!.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
            >
              Code
            </a>
          </>
        )}
      </div>
    </article>
  );
}
