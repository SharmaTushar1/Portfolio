import { getSortedPostsData } from "@/lib/posts";
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
    title: post.title,
  };
}

export default async function page({ params }: {params: { blogId: string}}) {

  const posts = getSortedPostsData();
  const { blogId } = params;

  if (!posts.find(post => post.id === blogId)) return notFound();

  return (
    <div>
      {blogId}
    </div>
  );
}