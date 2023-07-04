import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  coverImage: string;
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage}
      className='transition-shadow duration-200 hover:shadow-md'
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
