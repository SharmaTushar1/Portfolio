import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
  post: BlogPost
}

export default function Post({post}: Props) {
  const { id, title, date, description, tags, timeToRead } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className='mt-2'>
      <hr className='bg-gray-300 dark:invert border-0 pt-[1px]' />
      <h2 className='font-bold text-2xl'>
        <Link href={`/blog/${id}`}>{title}</Link>
      </h2>
      <p>{ description }</p>
      <br />
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='flex flex-col sm:flex-row w-max-[80%]'>
          <div className='flex flex-wrap -mt-2 sm:mt-0'>
            {tags.map( tag => (
              <div className='border rounded-full px-2 mr-2 text-xs py-1 bg-zinc-200 dark:bg-zinc-800 w-fit mt-2 sm:mt-0' key={tag}>{tag}</div>
            ))}
          </div>
          {/* TODO: for this tags also I'll have to have a different page. So, all the posts with tag Algorithms in one page, same for say front-end. */}
          <div>{ timeToRead } min read</div>
        </div>
        <p>{ formattedDate }</p>
      </div>
      <br />
    </div>
  );
}