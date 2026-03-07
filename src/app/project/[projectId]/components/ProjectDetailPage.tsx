import Skill from '@/app/components/Skill';
import Image from 'next/image';
import Link from 'next/link';

function normalizeUrl(url: string): string {
  if (!url) return '';
  return url.startsWith('http') ? url : `https://${url}`;
}

export default function ProjectDetailPage({ project }: { project: Project }) {
  const liveUrl = project.deploymentLink ? normalizeUrl(project.deploymentLink) : null;

  return (
    <div className="flex flex-col w-full">
      <header className="mb-8">
        <h1 className="section-title">{project.title}</h1>
        <hr className="section-divider" />
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
          {project.detailedDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 text-sm font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
            >
              Live site
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </header>

      <section className="mb-8">
        <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Skill
              key={tech.skillName}
              skillBgColor={tech.skillBgColor}
              skillName={tech.skillName}
            />
          ))}
        </div>
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section>
          <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Screenshots
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.screenshots.map((screenshotLink) => (
              <div
                key={screenshotLink}
                className="relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700"
              >
                <Image
                  src={screenshotLink}
                  alt="Project screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
