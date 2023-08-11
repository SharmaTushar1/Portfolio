// ? This file will be used for the search filter in the blogs page.
'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";

// TODO: Finish Search bar.

type Props = {
  posts: BlogPost[];
  setter: Dispatch<SetStateAction<BlogPost[]>>;
}

export default function SearchFilter({posts, setter}: Props) {
  const [search, setSearch] = useState('');

  // ? Every time the search is updated I'll update the original array in the Posts.tsx file using the setter function that I just passed

  useEffect(() => {
    setter(posts.filter((post: BlogPost) => post.title.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  return (
    <div>
      <input type="text" placeholder="" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}