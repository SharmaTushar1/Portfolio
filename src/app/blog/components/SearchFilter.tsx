// ? This file will be used for the search filter in the blogs page.
'use client';

import { faFilter, faSearch, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

// TODO: Add tags.
// TODO: Add Search bar icon and finish the UI design.

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
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] relative flex items-center">
      <input type="text" placeholder="Search Blogs..." className="p-2 px-4 w-full rounded-md bg-zinc-200 dark:bg-zinc-800 placeholder:text-zinc-400 dark:placeholder:text-zinc-600" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="absolute right-3" >
        <FontAwesomeIcon icon={faTags} className="mr-2 cursor-pointer" title="Filter by tags" />
      </div>
    </div>
  );
}