import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

// TODO: Add more meta data tags. Look up the docs for how to improve seo next js.

export function generateMetadata({ params }: {params: { postId: string}}) {

  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find(post => post.id === postId);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function page({ params }: {params: { postId: string}}) {

  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find(post => post.id === postId)) return notFound();

  return (
    <div>

    </div>
  );
}