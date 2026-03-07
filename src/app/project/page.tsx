import { Metadata } from 'next';
import Projects from './components/Projects';
import { allProjectsThumbnail, allProjects } from './projects_data';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Tushar Sharma',
  description: 'Software engineering projects by Tushar Sharma. Live demos and source code.',
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="section-title">Projects</h1>
      <hr className="section-divider" />
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
        A selection of things I&apos;ve built. Each project includes a short description, tech stack, and links to the live site and source when available.
      </p>
      <Projects thumbnailsArray={allProjectsThumbnail} projectsArray={allProjects} />
      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}