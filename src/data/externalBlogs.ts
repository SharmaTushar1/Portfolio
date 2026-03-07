/**
 * External / linked blogs — articles from other sites you want to showcase.
 * Add entries here to show them on the blog page with a link out.
 * The card shows the title, description, and tags you set here—not content from the URL.
 */
export const externalBlogs: BlogPost[] = [
  {
    id: 'external-binary-vs-ternary-search',
    title: 'Why is Binary Search preferred over Ternary Search?',
    date: '2025-07-23',
    tags: ['algorithms'],
    description: 'Ternary search makes Log3n recursive calls vs binary search’s Log2n, but does more comparisons in the worst case (4Log3n + 1 vs 2Log2n + 1). This article breaks down why binary search is preferred.',
    timeToRead: '5',
    externalUrl: 'https://www.geeksforgeeks.org/dsa/binary-search-preferred-ternary-search/',
  },
  // Example:
  // {
  //   id: 'external-how-react-works',
  //   title: 'How React actually works',
  //   date: '2024-01-15',
  //   tags: ['frontend', 'react'],
  //   description: 'A deep dive into React\'s rendering and scheduling.',
  //   timeToRead: '12',
  //   externalUrl: 'https://example.com/blog/how-react-works',
  // },
];
