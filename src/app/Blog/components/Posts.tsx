import { getSortedPostsData } from "@/lib/posts";
import Post from "./Post";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      {/* TODO: Finish the UI of the blogs page. I'll use mix of medium like desing and that dude's blog. */}
      <h2 className="text-6xl font-bold">Blog</h2>
      {/* TODO: Search Filter here */}
      <input type="text" />
      <div>
        {posts.map(post => (
          <Post key={post.id} post = {post}/>
        ))}
      </div>
    </section>
  );
}