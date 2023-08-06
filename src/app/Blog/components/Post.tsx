import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
  post: BlogPost
}

export default function Post({post}: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div>
      <Link href={`/blog/${id}`}>{title}</Link>
      <br />
      <p>{ formattedDate }</p>
    </div>
  );
}