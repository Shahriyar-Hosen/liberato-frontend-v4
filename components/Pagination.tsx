export default function Pagination({
  currentPage,
  postPerPage,
  totalPosts,
  setCurrentPage,
}: {
  currentPage: number;
  postPerPage: number;
  totalPosts: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const nextDisabled = !(currentPage + 1 < totalPosts / postPerPage);
  const prevDisabled = currentPage < 1;
  return (
    <nav
      className='mx-auto mt-5 flex max-w-7xl items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:bg-gray-800 sm:px-6'
      aria-label='Pagination'
    >
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700 dark:text-gray-400'>
          Showing{' '}
          <span className='font-medium'>
            {currentPage === 0 ? 1 : currentPage * postPerPage}
          </span>{' '}
          to{' '}
          <span className='font-medium'>
            {currentPage === 0
              ? postPerPage
              : (currentPage + 1) * postPerPage > totalPosts
              ? totalPosts
              : currentPage * postPerPage}
          </span>{' '}
          of <span className='font-medium'>{totalPosts}</span> results
        </p>
      </div>
      <div className='flex flex-1 justify-between sm:justify-end'>
        <button
          type='button'
          disabled={prevDisabled}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-200'
        >
          Previous
        </button>
        <button
          type='button'
          disabled={nextDisabled}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-200'
        >
          Next
        </button>
      </div>
    </nav>
  );
}
