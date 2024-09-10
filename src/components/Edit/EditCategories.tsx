'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import { useUpdateCategoryQuery, useDeleteCategoryQuery, useFetchCategory } from '@/hooks/PostRequests';
import { toastSuccess, toastError } from '@/utils/toast';

interface Props {
  category : {
    _id: string;
    title: string;
    description: string;
    slug: string;
    parentCategory: string;
  };
}

const EditCategories = ({category} : Props ) => {
  const [showEdit, setShow] = useState(false);
  const [title, setTitle] = useState<string>(category?.title);
  const [slug, setSlug] = useState<string>(category?.slug);
  const [description, setDescription] = useState<string>(category?.description);

  const { updateCategoryFn, isLoading, error, isSuccess } = useUpdateCategoryQuery(category?._id);
  const { deleteCategoryFn, deleteSuccess} = useDeleteCategoryQuery(category?._id);
  const { refetch } = useFetchCategory();


  const handleSubmit = async () => {
    const catData = {
      title,
      slug,
      description,
      parentCategory: 'Root',
    };

    try {
      updateCategoryFn(catData);
      console.log('Success:', catData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      deleteCategoryFn();
      console.log('Success');
    } catch (error) {
      
    }
  }

  useEffect(() => {
    refetch();
    if (isSuccess) {
      toastSuccess(`${title} category updated successfully`);
      setShow(false);
    }
    if (deleteSuccess) {
      toastSuccess(`${title} Deleted successfully`)
    }
  }, [isSuccess, deleteSuccess]);
  return (
    <div>
      <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span
          className='text-red-700 border-x-2 px-2 cursor-pointer'
          onClick={handleDelete}>
          Trash
        </span>
        <Link href={`/polls`} className='text-blue-600 cursor-pointer'>
          View
        </Link>
      </div>

      {showEdit && (
        <div className='grid place-items-center justify-between'>
          <div className='black__overlay' onClick={() => setShow(false)} />

          <div className='fixed z-[1000] md:w-2/3  left-0 right-0 top-0 bottom-0 m-auto h-fit mx6 bg-white p-10 setings md:gap-5'>
            <button
              onClick={() => setShow(false)}
              className='top-0 absolute right-0 text-gray-500 p-3'>
              <HiX className='cursor-pointer' size={20} />
            </button>

            <div className='flex flex-col gap-5'>
          <p className='text-[20px]'>Add New Category</p>

          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='p-3 border bg-white focus:outline-none'
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Slug</label>
            <input
              type='text'
              className='p-3 border bg-white focus:outline-none'
              value={slug}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSlug(e.target.value)
              }
            />
          </div>

          <p className='text-[#52575C] text-sm'>
            The “slug” is the URL-friendly version of the name. It is usually
            all lowercase and contains only letters, numbers, and hyphens.
          </p>

          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Parent Category</label>

            <select
              name=''
              id=''
              className='p-3 border bg-white focus:outline-none'>
              <option value='--Parent Category--'>--Parent Category--</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Description</label>

            <textarea
              name=''
              id=''
              className='p-3 border bg-white focus:outline-none h-[100px] resize-none'
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }></textarea>
          </div>

          <button
            className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit'
            onClick={handleSubmit}>
            {isLoading ? `Updating ${title} category...` : 'update Category'}
          </button>
        </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default EditCategories;
