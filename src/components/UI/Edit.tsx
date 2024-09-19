'use client';
import React, { useState } from 'react';
import parser from 'html-react-parser';

const Edit = ({ dataProps }: any) => {
  const [showEdit, setShow] = useState(false);
  return (
    <>
      <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span className='text-blue-600 border-x-2 px-2 flex'>Quick Edit</span>
        <span className='text-red-700 border-r-2 pr-2'>Trash</span>
        <span className='text-blue-600'>View</span>
      </div>

      {showEdit && (
        <div className=''>
          <div
            className='black__overlay'
            onClick={() => {
              setShow(false);
            }}></div>
          <div className='fixed z-[1000] md:w-1/3 md:left-1/3  left-0 right-0 top-[20vh] md:top-[30vh] mx-6 bg-white p-10  md:gap-5'>

          </div>
        </div>
      )}
    </>
  );
};

export default Edit;