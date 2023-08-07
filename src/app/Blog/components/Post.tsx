import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
  post: BlogPost
}

export default function Post({post}: Props) {
  const { id, title, date, description, tags, timeToRead } = post;
  const formattedDate = getFormattedDate(date);

  console.log(timeToRead);

  return (
    <div className='mt-2'>
      <hr className='bg-gray-300 dark:invert border-0 pt-[1px]' />
      <h2 className='font-bold text-2xl'>
        <Link href={`/blog/${id}`}>{title}</Link>
      </h2>
      <p>{ description }</p>
      <br />
      <div className='flex'>
        <div className='flex'>
          {tags.map( tag => (
            <div className='border rounded-full px-2 text-xs py-1 bg-zinc-200 dark:bg-zinc-800' key={tag}>{tag}</div>
          ))}
        </div>
        <div>{ timeToRead } min read</div>
        <p>{ formattedDate }</p>
      </div>
      <br />
    </div>
  );
}