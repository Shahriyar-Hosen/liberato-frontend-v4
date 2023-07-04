function CardItem({
  name,
  description,
  icon,
}: {
  icon: unknown;
  name: string;
  description: string;
}) {
  return (
    <div key={name} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8 dark:bg-gray-700'>
        <div className='-mt-6'>
          <div>
            <span className='inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg'>
              {/* @ts-ignore */}
              {icon}
            </span>
          </div>
          <h3 className='mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-200'>
            {name}
          </h3>
          <p className='mt-5 text-base leading-7 text-gray-600 dark:text-gray-300'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
