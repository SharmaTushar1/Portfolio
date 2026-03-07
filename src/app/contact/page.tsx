import { Metadata } from 'next';
import Footer from '../components/Footer';
import ContactUsForm from './components/ContactUsForm';
import RevealAfterRobotCheck from '../components/RevealAfterRobotCheck';

export const metadata: Metadata = {
  title: 'Contact — Tushar Sharma',
  description: "Get in touch with Tushar Sharma. Software Engineer portfolio contact.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="section-title">Contact</h1>
      <hr className="section-divider" />
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Have a question or want to work together? Send a message or reach out directly.
      </p>
      <div className="mt-6 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 max-w-md">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Contact details</p>
        <RevealAfterRobotCheck variant="stack">
          <a href="mailto:sharmatushar0k@gmail.com" className="block text-primary-600 dark:text-primary-400 hover:underline">sharmatushar0k@gmail.com</a>
          <a href="tel:+919588048216" className="block mt-1 text-zinc-700 dark:text-zinc-300 hover:underline">+91 9588048216</a>
        </RevealAfterRobotCheck>
        <div className="mt-2 flex gap-4">
          <a href="https://www.linkedin.com/in/tusharsharma31" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">LinkedIn</a>
          <a href="https://www.github.com/SharmaTushar1" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">GitHub</a>
          <a href="https://www.instagram.com/hindwantushar" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">Instagram</a>
        </div>
      </div>
      <div className="mt-8">
        <ContactUsForm />
      </div>
      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}