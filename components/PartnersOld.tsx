import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Partners() {
  const { t } = useTranslation();
  return (
    <div className='w-full bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8'>
        <p className='text-center text-lg font-semibold text-gray-600'>
          {t('about:partners_subtitle')}
        </p>
        <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={150}
              height={500}
              className='max-h-12'
              src='/partners/makarska.png'
              alt='Makarska'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={150}
              height={500}
              className='max-h-12'
              src='/partners/split.svg'
              alt='Grad Split'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={250}
              height={500}
              className='max-h-16'
              src='/partners/SOSS.png'
              alt='Sveučilišni odjel za stručne studije'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={150}
              height={100}
              className='max-h-24'
              src='/partners/tzsplit.png'
              alt='TZ Split'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={150}
              height={500}
              className='max-h-24'
              src='/partners/trogir.svg'
              alt='Trogir'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={125}
              height={150}
              className='max-h-24'
              src='/partners/unist-logo.png'
              alt='Sveučilište u Splitu'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={100}
              height={100}
              className='max-h-24'
              src='/partners/nacionalna_zaklada.jpg'
              alt='Financijski podržava Nacionalna zaklada za razvoj civilnog društva'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={200}
              height={500}
              className='max-h-24'
              src='/partners/euparlament.png'
              alt='Europski parlament'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 p-8'>
            <Image
              width={200}
              height={500}
              className='max-h-24'
              src='/partners/szst.png'
              alt='Studentski zbor Sveučilišta u Splitu'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
