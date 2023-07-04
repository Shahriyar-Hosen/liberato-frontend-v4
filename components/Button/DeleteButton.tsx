export default function DeleteButton({
  onClick,
  btnText,
}: {
  onClick: () => void;
  btnText: string;
}) {
  return (
    <button
      type='button'
      className='mb-12 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
