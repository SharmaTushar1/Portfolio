import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
  post: BlogPost;
  isPinned?: boolean;
};

export default function Post({ post, isPinned }: Props) {
  const { id, title, date, description, tags, timeToRead, externalUrl } = post;
  const formattedDate = getFormattedDate(date);
  const tagList = tags ?? [];

  const cardContent = (
    <>
      {isPinned && (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400 mb-2">
          ★ Pinned
        </span>
      )}
      <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
        {externalUrl && (
          <span className="ml-2 inline-flex items-center gap-1 text-xs font-normal text-zinc-500 dark:text-zinc-400">
            external link
            <span aria-hidden>↗</span>
          </span>
        )}
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base line-clamp-3">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{formattedDate}</span>
        <span>{timeToRead} min read</span>
        <div className="flex flex-wrap gap-2">
          {tagList.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const cardClass =
    'rounded-xl border border-zinc-200 dark:border-zinc-700 p-5 sm:p-6 transition-colors bg-white dark:bg-zinc-900/50 block ' +
    (isPinned
      ? 'border-primary-200 dark:border-primary-900/50 hover:border-primary-300 dark:hover:border-primary-800'
      : 'hover:border-primary-300 dark:hover:border-primary-700');

  if (externalUrl) {
    return (
      <article>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass + ' hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}
        >
          {cardContent}
        </a>
      </article>
    );
  }

  return (
    <article>
      <Link href={`/blog/${id}`} className={cardClass + ' hover:border-primary-300 dark:hover:border-primary-700'}>
        {cardContent}
      </Link>
    </article>
  );
}
