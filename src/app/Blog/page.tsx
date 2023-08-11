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
      {/* ?? passing directly inside the page.tsx so to avoid the server side and client side errors. https://i.imgur.com/UyDX6Zi.png */}
      <Posts posts={posts} />
      <div className="mb-4 mt-4">
        <Footer />
      </div>
    </div>
  );
}