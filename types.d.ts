type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  timeToRead: string;
  /** If true, show in pinned section (max 3). */
  pinned?: boolean;
  /** If set, post is an external link; opens in new tab. */
  externalUrl?: string;
};