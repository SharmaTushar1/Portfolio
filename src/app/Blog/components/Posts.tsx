import { getSortedPostsData } from "@/lib/posts";
import Post from "./Post";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2 className="text-6xl font-bold">Blog</h2>
      {/* Search Filter here */}
      
      <div>
        {posts.map(post => (
          <Post key={post.id} post = {post}/>
        ))}
      </div>
    </section>
  );
}