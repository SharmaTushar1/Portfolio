import Footer from '@/app/components/Footer';
import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

export function generateMetadata({ params }: { params: { blogId: string } }) {
  const posts = getSortedPostsData();
  const { blogId } = params;
  const post = posts.find((p) => p.id === blogId);
  if (!post) return { title: 'Post not found' };
  return { title: `${post.title} — Tushar Sharma` };
}

export default async function page({ params }: { params: { blogId: string } }) {
  const posts = getSortedPostsData();
  const { blogId } = params;
  const post = posts.find((p) => p.id === blogId);
  if (!post) return notFound();
  if (post.externalUrl) return redirect(post.externalUrl);

  const { title, date, tags, description, timeToRead, contentHtml } = await getPostData(blogId);
  const pubDate = getFormattedDate(date);

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <article>
        <h1 className="section-title text-2xl sm:text-3xl">{title}</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm">
          {pubDate} · {timeToRead} min read
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <section
          className="mt-8 prose prose-zinc dark:prose-invert max-w-none prose-headings:font-heading"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p className="mt-8">
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            ← Back to blog
          </Link>
        </p>
      </article>
      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}