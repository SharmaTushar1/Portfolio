import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { externalBlogs } from '@/data/externalBlogs';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const localPosts: BlogPost[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const tags = matterResult.data.tags ?? [];
    const pinned = Boolean(matterResult.data.pinned);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: Array.isArray(tags) ? tags : [],
      description: matterResult.data.description ?? '',
      timeToRead: String(matterResult.data.timeToRead ?? ''),
      pinned,
    };
  });

  const combined: BlogPost[] = [
    ...localPosts,
    ...externalBlogs,
  ];

  return combined.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return dateB - dateA;
  });
}

export async function getPostData(id: string): Promise<BlogPost & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const tags = matterResult.data.tags ?? [];

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: Array.isArray(tags) ? tags : [],
    description: matterResult.data.description ?? '',
    timeToRead: String(matterResult.data.timeToRead ?? ''),
    contentHtml,
  };
}
