import { getSortedPostsData } from "@/lib/posts";
import Footer from "../components/Footer";
import Posts from "./components/Posts";

// TODO: Add pagination

// TODO: Add comments using giscus https://giscus.app/

// TODO: The blogs are basically what I'll write on github.

export default function Blog() {

  const posts:BlogPost[] = getSortedPostsData();
  return (
    <div className="">
      <Posts posts={posts} />
      <div className="mb-4 mt-4">
        <Footer />
      </div>
    </div>
  );
}