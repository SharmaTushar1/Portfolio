import Footer from "../components/Footer";
import Posts from "./components/Posts";

export default function Blog() {

  return (
    <div className="">
      <Posts />
      <div className="mb-4 mt-4">
        <Footer />
      </div>
    </div>
  );
}