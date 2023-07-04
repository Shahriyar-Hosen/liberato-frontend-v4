import Link from 'next/link';

export default function AddButton({
  href,
  btnText,
}: {
  href: string;
  btnText: string;
}) {
  return (
    <div className='flex justify-end'>
      <Link
        href={href}
        className='inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        {btnText}
      </Link>
    </div>
  );
}
