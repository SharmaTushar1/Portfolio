import { getSortedPostsData } from '@/lib/posts';
import Footer from '../components/Footer';
import Posts from './components/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Tushar Sharma',
  description: "Tushar Sharma's blog. Thoughts on software engineering and more.",
};

export default function Blog() {
  const posts: BlogPost[] = getSortedPostsData();
  return (
    <div className="flex flex-col w-full">
      <Posts posts={posts} />
      <div className="mt-section">
        <Footer />
      </div>
    </div>
  );
}