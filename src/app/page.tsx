import Link from 'next/link';
import Footer from './components/Footer';
import { allProjectsThumbnail } from './project/projects_data';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = allProjectsThumbnail.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)]">
      <section className="py-8 sm:py-12">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Hi, I&apos;m Tushar
        </h1>
        <p className="mt-3 text-xl sm:text-2xl lg:text-3xl text-zinc-600 dark:text-zinc-400">
          Software Engineer
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
          I build and ship software that scales—from enterprise data platforms to products used by real users and teams. I&apos;m into tech and deep tech, and really interested in startups. Always happy to talk about what I&apos;ve built and what we could build next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            About me
          </Link>
          <Link
            href="/project"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="mt-12 sm:mt-16">
          <h2 className="section-title text-2xl">Featured projects</h2>
          <hr className="section-divider" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const slug = project.title.split(' ').join('-');
              return (
                <Link
                  key={project.title}
                  href={`/project/${slug}`}
                  className="group block rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {project.briefDescription}
                    </p>
                    <span className="mt-2 inline-block text-sm text-primary-600 dark:text-primary-400 font-medium">
                      View project →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <div className="mt-section-lg">
        <Footer />
      </div>
    </div>
  );
}
