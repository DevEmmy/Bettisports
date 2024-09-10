import Table from '@/components/Comments/Table';
import React from 'react';
import { HiSearch, HiTrash } from 'react-icons/hi';
import Edit from '@/components/UI/Edit';

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-10 flex-center'>
        <p className=' font-[600] '>Comments</p>
      </div>

      <div className='md:flex-center md:justify-between md:flex-col-reverse'>
        <div className='bg-white border flex'>
          <input
            type='text'
            className='bg-transparent focus:outline-none p-3 grow'
            placeholder='Search Comments'
          />
          <div className='bg-primary1 p-3 text-white max-md:0'>
            <HiSearch size={24} />
          </div>
        </div>

        <div className='categories max-md:mt-7'>
          <p>
            All <span>(108)</span>
          </p>
          <p>
            Mine <span>(14)</span>
          </p>
          <p>
            Approved <span>(109)</span>
          </p>
          <p>
            Spam <span>(109)</span>
          </p>
          <p>
            Trash <span>(109)</span>
          </p>
        </div>
      </div>

      <div className='post-select gap-4 flex max-md:justify-between'>
        <select name='' id=''>
          <option value=''>Bulk Action</option>
        </select>

        <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4'>
          Apply
        </button>
      </div>

      <div className='overflow-x-auto'>
        <Table />
      </div>
    </div>
  );
};

export default page;
