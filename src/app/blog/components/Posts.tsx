'use client';

import { useState, useMemo } from 'react';
import Post from './Post';

function getAllTags(posts: BlogPost[]): string[] {
  const set = new Set<string>();
  posts.forEach((p) => (p.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export default function Posts({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => getAllTags(posts), [posts]);

  const filteredPosts = useMemo(() => {
    let list = posts;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q) ||
          (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedTag) {
      list = list.filter((p) => (p.tags ?? []).includes(selectedTag));
    }
    return list;
  }, [posts, search, selectedTag]);

  const pinnedPosts = useMemo(
    () => filteredPosts.filter((p) => p.pinned).slice(0, 3),
    [filteredPosts]
  );
  const otherPosts = useMemo(
    () => filteredPosts.filter((p) => !pinnedPosts.some((pin) => pin.id === p.id)),
    [filteredPosts, pinnedPosts]
  );

  return (
    <section>
      <h1 className="section-title">Blog</h1>
      <hr className="section-divider" />
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Occasional writing on software, side projects, and what I&apos;m learning. Filter by tag or search.
      </p>

      {/* Search + Tag filter */}
      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Search by title, description, or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-4 py-2.5 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedTag === null
                ? 'bg-primary-600 dark:bg-primary-500 text-white'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Pinned */}
      {pinnedPosts.length > 0 && (
        <div className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
            <span className="text-primary-500">★</span> Pinned
          </h2>
          <div className="space-y-4">
            {pinnedPosts.map((post) => (
              <Post key={post.id} post={post} isPinned />
            ))}
          </div>
        </div>
      )}

      {/* Rest */}
      <div className={pinnedPosts.length > 0 ? 'mt-10' : 'mt-8'}>
        <h2 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          {pinnedPosts.length > 0 ? 'More posts' : 'Posts'}
        </h2>
        {otherPosts.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400 py-8">
            No posts match your filter. Try another tag or search.
          </p>
        ) : (
          <div className="space-y-4">
            {otherPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
