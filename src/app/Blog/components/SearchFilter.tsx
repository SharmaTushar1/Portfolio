// ? This file will be used for the search filter in the blogs page.

// TODO: Finish Search bar.

type Props = {
  posts: BlogPost[];
}

export default function SearchFilter(posts: Props) {
  console.log(posts);
  return (
    <div>
      <input type="text" placeholder="" />

    </div>
  );
}