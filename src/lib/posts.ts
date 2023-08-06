// ? This is the file where I am converting the markdown file to html and sorting the data based on date and returning it.

// ? First we will import the files from the src/blogposts directory.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // ? We will use gray matter to read the meta data from the markdown
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts'); // ? imported the posts directory

// ? This function returns an array of all the metadata. First we map to get the metadata of each one and then return the sorted of that.

export function getSortedPostsData() {
  // ? get all the file names in the blogposts directory synchronously i.e. this will block the code execution until it gets done.
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {

    // ? id here is basically the name of the file. So we will be removing .md out of the file name to get the id.
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse the metadata of the post markdown files.
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      description: matterResult.data.description,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => a.date < b.date ? 1:-1);
}

// ? Function to only get one blog post with html and metadata.

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
    description: matterResult.data.description,
    contentHtml
  };

  return blogPostWithHtml;
}
