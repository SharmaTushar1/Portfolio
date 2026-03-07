import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';
import { skills } from './skills';
import Skill from '../components/Skill';
import { Metadata } from 'next';
import { education, experiences } from '@/data/experience';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@SharmaTushar1-yt';
// Add your YouTube video IDs to embed them (find in the video URL: youtube.com/watch?v=VIDEO_ID)
const ABOUT_YOUTUBE_VIDEO_IDS: string[] = [];

export const metadata: Metadata = {
  title: 'About — Tushar Sharma',
  description: 'Tushar Sharma — Software Engineer at C3.AI. Education, career, and what I learned along the way. Full-stack, data platforms, and product experience.',
};

function TimelineNode({
  title,
  subtitle,
  dates,
  location,
  highlights,
  learned,
}: {
  title: string;
  subtitle: string;
  dates: string;
  location?: string;
  highlights: string[];
  learned?: string;
}) {
  return (
    <article className="relative pl-6 sm:pl-8 border-l-2 border-primary-200 dark:border-primary-800">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400" />
      <header className="mb-2">
        <h2 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        <p className="font-medium text-primary-600 dark:text-primary-400">{subtitle}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          {dates}
          {location && ` · ${location}`}
        </p>
      </header>
      <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      {learned && (
        <p className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700 text-sm italic text-zinc-600 dark:text-zinc-400">
          <span className="font-medium not-italic text-zinc-700 dark:text-zinc-300">Learnings: </span>
          {learned}
        </p>
      )}
    </article>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="section-title">About</h1>
      <hr className="section-divider" />

      {/* Hero — first thing visitors see */}
      <section className="mt-10 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/80 dark:to-zinc-900/40 overflow-hidden">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:gap-14">
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-400/20 to-primary-600/20 dark:from-primary-500/30 dark:to-primary-700/30 blur-sm" aria-hidden />
              <Image
                src="/Me.jpeg"
                height={220}
                width={220}
                alt="Tushar Sharma"
                className="relative rounded-2xl object-cover w-52 h-52 sm:w-56 sm:h-56 shadow-lg ring-2 ring-white dark:ring-zinc-800"
              />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-6 text-center lg:text-left">
              Tushar Sharma
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1 text-center lg:text-left">
              Software Engineer
            </p>
            <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
              C3.AI · Bengaluru
            </span>
          </div>

          <div className="mt-8 lg:mt-0 flex-1 min-w-0">
            <p className="text-xl sm:text-2xl font-heading font-semibold text-zinc-900 dark:text-zinc-100 leading-snug max-w-xl">
              I ship software that scales—from enterprise data platforms to products that real teams use every day.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Software Engineer with proven track record in AI and startups—from building AI-powered product workflows to shipping MVPs that scale. Especially interested in early-stage startups and AI-driven products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:sharmatushar0k@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email me
              </a>
              <a
                href="tel:+919588048216"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 9588048216
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 dark:bg-primary-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download resume
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.linkedin.com/in/tusharsharma31" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.github.com/SharmaTushar1" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col xl:flex-row xl:gap-12 w-full mt-12">
        <div className="hidden xl:block w-0 shrink-0" aria-hidden />
        <div className="xl:max-w-[65%] xl:ml-0 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed w-full">

          {/* Education first */}
          <div className="pt-4">
            <h3 className="section-title text-2xl mb-6">Education</h3>
            <div className="space-y-0">
              <TimelineNode
                title={education.degree}
                subtitle={education.institution}
                dates={`${education.startDate} – ${education.endDate}`}
                location={education.location}
                highlights={education.highlights}
                learned={education.learned}
              />
            </div>
          </div>

          {/* Career */}
          <div className="pt-12">
            <h3 className="section-title text-2xl mb-6">Career</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <TimelineNode
                  key={`${exp.company}-${exp.role}-${index}`}
                  title={exp.role}
                  subtitle={exp.company}
                  dates={`${exp.startDate} – ${exp.endDate}`}
                  location={exp.location}
                  highlights={exp.highlights}
                  learned={exp.learned}
                />
              ))}
            </div>
          </div>

          {/* Achievements */}
          {/* <div className="pt-12">
            <h3 className="section-title text-2xl mb-4">Achievements</h3>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Top contributor in one of GitHub&apos;s highest-trending repositories.</li>
              <li>Represented college team at IIT Bombay Tech Fest.</li>
            </ul>
          </div> */}

          {/* Skills */}
          <div className="pt-8">
            <h3 className="section-title text-2xl mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Skill
                  key={skill.skillName}
                  skillName={skill.skillName}
                  skillBgColor={skill.skillBgColor}
                />
              ))}
            </div>
          </div>

          {/* Personal */}
          <div className="pt-12">
            <h3 className="section-title text-2xl mb-4">Beyond work</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
              When I&apos;m not shipping code, I like to play guitar, workout, explore new places, and meet new people. I post covers and occasional clips on my YouTube channel—drop by if you want to hear something.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors mb-8"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Watch on YouTube
            </a>
            {ABOUT_YOUTUBE_VIDEO_IDS.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
                {ABOUT_YOUTUBE_VIDEO_IDS.map((videoId) => (
                  <div key={videoId} className="aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}
