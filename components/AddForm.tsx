import { Switch } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { City, ICategory, QuestionAndAnswer } from 'types/admin';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import Image from 'next/image';
import { apiUrl } from 'utils/api';
import axios from 'axios';
import SuccessModal from './SuccesModal';
import ErrorModal from './ErrorModal';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AddForm({
  cities,
  categories,
  session,
}: {
  cities: City[];
  categories: ICategory[];
  session: Session | null;
}) {
  const [city, setCity] = useState<string>(cities[0].name);
  const [category, setCategory] = useState<string>(categories[0].name);
  const [questionsAndAnswer, setQuestionsAndAnswer] = useState<
    QuestionAndAnswer[] | []
  >([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState({
    state: false,
    message: '',
    title: '',
  });

  useEffect(() => {
    const questions = categories.find(
      (c: ICategory) => c.name === category
    )?.questions;
    if (questions) {
      const arr: QuestionAndAnswer[] = questions.map((q: QuestionAndAnswer) => {
        return { id: q.id, question: q.question, answer: false };
      });
      setQuestionsAndAnswer(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const formik = useFormik({
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      street: '',
      about: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3),
      email: Yup.string().email(),
      street: Yup.string().required('Street is required'),
      about: Yup.string(),
      phone: Yup.string(),
    }),
    onSubmit: async (values) => {
      if (!selectedFile) {
        setError({
          state: true,
          message: 'Image is required',
          title: 'Error!',
        });
        return;
      }
      let qaString = '';
      questionsAndAnswer.forEach((q: QuestionAndAnswer) => {
        qaString += `${q.id}:${q.answer},`;
      });
      const formData = new FormData();
      formData.append('images[]', selectedFile);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('street', values.street);
      formData.append('about', values.about);
      formData.append('city', city);
      formData.append('category', category);
      formData.append('qa', qaString.substring(0, qaString.length - 1));
      // @ts-ignore
      formData.append('user', session.user.name);

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${apiUrl}/locations`,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.user.token}`,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      };

      axios(config)
        .then(() => setSuccess(true))
        .catch(({ response }) => {
          if (response.status === 401) {
            setError({
              state: true,
              message: 'Your session has expired. Please log in again.',
              title: 'Unauthorized',
            });
            return;
          }
          setError({
            state: true,
            message: response.data['hydra:description'],
            title: response.data['hydra:title'],
          });
        });
    },
  });

  const setEnabled = (prop: QuestionAndAnswer) => {
    const index = questionsAndAnswer.findIndex(
      (q: QuestionAndAnswer) => q.question === prop.question
    );
    const arr = [...questionsAndAnswer];
    arr[index].answer = !arr[index].answer;
    setQuestionsAndAnswer(arr);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e?.target?.files![0]);
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  if (success) {
    return (
      <SuccessModal
        isOpen={success}
        close={() => setSuccess(false)}
        title='Success!'
        desc='Location added successfully!'
      />
    );
  }

  if (error.state) {
    return (
      <ErrorModal
        isOpen={error.state}
        close={() =>
          setError({
            state: false,
            message: '',
            title: '',
          })
        }
        title={error.title}
        desc={error.message}
      />
    );
  }

  return (
    <div className='text-center'>
      {formik.errors.name && (
        <div className='text-red-500 first-letter:uppercase'>
          {formik.errors.name}
        </div>
      )}
      {formik.errors.street && (
        <div className='text-red-500 first-letter:uppercase'>
          {formik.errors.street}
        </div>
      )}
      {formik.errors.email && (
        <div className='text-red-500 first-letter:uppercase'>
          {formik.errors.email}
        </div>
      )}
      <form className='mt-8' onSubmit={formik.handleSubmit}>
        <div className='mx-auto max-w-5xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
          <div className='lg:col-span-5 xl:col-span-6'>
            <div className='w-full'>
              <label
                htmlFor='name'
                className='sr-only block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  defaultValue={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder='Location name'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:text-black sm:text-sm'
                />
              </div>
            </div>
            <div className='w-full'>
              <label
                htmlFor='Street'
                className='sr-only block text-sm font-medium text-gray-700'
              >
                Street
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='street'
                  id='street'
                  defaultValue={formik.values.street}
                  onChange={formik.handleChange}
                  placeholder='Location street'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:text-black sm:text-sm'
                />
              </div>
            </div>
            <div className='w-full'>
              <label
                htmlFor='email'
                className='sr-only block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  defaultValue={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder='Location email'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:text-black sm:text-sm'
                />
              </div>
            </div>
            <div className='w-full'>
              <label
                htmlFor='phone'
                className='sr-only block text-sm font-medium text-gray-700'
              >
                Phone
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  defaultValue={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder='Location phone'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:text-black sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='about'
                className='sr-only block text-sm font-medium text-gray-700'
              >
                Add location description
              </label>
              <div className='mt-1'>
                <textarea
                  rows={4}
                  name='about'
                  id='about'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:text-black sm:text-sm'
                  onChange={formik.handleChange}
                  value={formik.values.about}
                  placeholder='Add location description'
                />
              </div>
            </div>
          </div>
          <div className='relative lg:col-span-5 lg:-mr-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <div>
                <label htmlFor='city' className='sr-only'>
                  City
                </label>
                <select
                  onChange={handleCityChange}
                  id='city'
                  name='city'
                  autoComplete='city-name'
                  className='relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 dark:text-black sm:text-sm'
                >
                  {cities.map((c: City) => (
                    <option key={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='category' className='sr-only'>
                  Category
                </label>
                <select
                  onChange={handleCategoryChange}
                  id='category'
                  name='category'
                  autoComplete='category-name'
                  className='relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 dark:text-black sm:text-sm'
                >
                  {categories.map((cat: ICategory) => (
                    <option key={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {questionsAndAnswer.length > 0 &&
              questionsAndAnswer.map((q: QuestionAndAnswer) => {
                return (
                  <Switch.Group
                    as='div'
                    className='mt-4 flex items-center'
                    key={q.id}
                  >
                    <Switch
                      key={q.id}
                      checked={q.answer}
                      onChange={() => setEnabled(q)}
                      className={classNames(
                        q.answer ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span
                        aria-hidden='true'
                        className={classNames(
                          q.answer ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                    <Switch.Label as='span' className='ml-3'>
                      <span className='text-sm font-medium text-gray-900'>
                        {q.question}
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                );
              })}
          </div>
        </div>
        {selectedFile ? (
          <div className='mt-5 flex justify-center sm:mt-6'>
            <Image
              width={300}
              height={300}
              src={URL.createObjectURL(selectedFile)}
              alt='Selected image'
            />
          </div>
        ) : (
          <div className='mx-auto mt-5 flex max-w-4xl justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
            <div className='space-y-1 text-center'>
              <svg
                className='mx-auto h-12 w-12 text-gray-400'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'
              >
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='flex text-sm text-gray-600'>
                <label
                  htmlFor='file-upload'
                  className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                >
                  <span>Upload a file</span>
                  <input
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 20MB</p>
            </div>
          </div>
        )}
        <div className='mt-10 flex justify-center'>
          <button
            type='submit'
            // @ts-expect-error
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting || !formik.isValid}
            className='inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          >
            Add location
          </button>
        </div>
      </form>
    </div>
  );
}
