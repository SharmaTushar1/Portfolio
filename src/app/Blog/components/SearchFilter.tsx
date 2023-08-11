// ? This file will be used for the search filter in the blogs page.
'use client';

import { useEffect, useState } from "react";

// TODO: Finish Search bar.

type Props = {
  posts: BlogPost[];
}

export default function SearchFilter(posts: Props) {
  const [search, setSearch] = useState('');
  console.log(posts);
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div>
      <input type="text" placeholder="" value={search} onChange={(e) => setSearch(e.target.value)} />

    </div>
  );
}