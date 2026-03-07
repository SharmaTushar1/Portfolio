import Link from 'next/link';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/tusharsharma31', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://www.instagram.com/hindwantushar', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.youtube.com/@SharmaTushar1-yt', label: 'YouTube', icon: 'youtube' },
  { href: 'https://www.github.com/SharmaTushar1', label: 'GitHub', icon: 'github' },
  { href: 'mailto:sharmatushar0k@gmail.com', label: 'Gmail', icon: 'gmail' },
  { href: 'https://www.twitter.com/SharmaTushar1', label: 'Twitter', icon: 'twitter' },
  { href: 'https://buymeacoffee.com/SharmaTusharOne', label: 'Buy Me a Coffee', icon: 'buymeacoffee' },
];

const icons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  youtube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  github: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  gmail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  buymeacoffee: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.216 5.414c-1.356-1.34-3.264-2.125-5.378-2.086-.576.01-1.124.078-1.635.184a5.463 5.463 0 00-.747-.361 5.456 5.456 0 00-2.207-.469c-.576-.024-1.124.078-1.635.184-2.114-.039-4.022.746-5.378 2.086-2.707 2.669-2.683 6.98-.037 9.636 1.356 1.34 3.264 2.125 5.378 2.086.576-.01 1.124-.078 1.635-.184.239.09.477.18.747.361.239.09.477.18.73.269 2.114.039 4.022-.746 5.378-2.086 2.646-2.656 2.67-6.967.037-9.636zM12 15.312c-2.995 0-5.417-2.344-5.417-5.232S9.005 4.848 12 4.848s5.417 2.344 5.417 5.232-2.422 5.232-5.417 5.232z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-4 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-1">
          {socialLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              aria-label={label}
            >
              {icons[icon]}
            </Link>
          ))}
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getUTCFullYear()} Tushar Sharma
        </p>
      </div>
    </footer>
  );
}
