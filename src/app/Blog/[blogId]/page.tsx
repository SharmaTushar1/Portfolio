import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// TODO: Add more meta data tags. Look up the docs for how to improve seo next js.

export function generateMetadata({ params }: {params: { blogId: string}}) {

  const posts = getSortedPostsData();
  const { blogId } = params; // ? this name will be the same as the name of the params which will be the same as the one of the file name ie. blogId here

  const post = posts.find(post => post.id === blogId);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: `${post.title} - Tushar Sharma`,
  };
}

export default async function page({ params }: {params: { blogId: string}}) {

  const posts = getSortedPostsData();
  const { blogId } = params;

  if (!posts.find(post => post.id === blogId)) return notFound();

  const { title, date, tags, description, timeToRead, contentHtml } = await getPostData(blogId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">
        {pubDate}
      </p>
      <article>
        {/* FIXME: This html is not working. It is not rendering the markdown and just rendering it as simple text instead of an html. */}
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}