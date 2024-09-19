'use client';
import EachBlog from '@/components/Blog/EachBlog';
import EachNews from '@/components/FootballNews/EachNews';
import Loader from '@/components/Loader';
import Line from '@/components/UI/Line';
import { useFetchLikeAndSaved } from '@/hooks/UserRequests';
import React from 'react';

const page = () => {
  const { likesAndSaved, isError, isLoading } = useFetchLikeAndSaved();
  return (
    <div className='md:grid grid-cols-6 gap-5 px-5 md:px-xPadding my-10'>
      <div className='flex items-center gap-2 col-span-6 my-2.5'>
        {/* <div /> */}
        <p className='col-span-5 font-[600] text-[16px]'>Saved Posts</p>
        <div className='md:hidden grow'>
          <Line />
        </div>
      </div>

      {/* <img src='./ads2.png' alt='' /> */}

      <div className='md:grid md:col-span-4 md:grid-cols-3 gap-3 md:gap-5'>
        {isLoading ? (
          <Loader />
        ) : likesAndSaved?.saved.length > 0 ? (
          likesAndSaved?.saved.map((item: any, i: number) => {
            return <EachNews key={i} item={item} />;
          })
        ) : (
          <p>There an no liked posts</p>
        )}
        {/* {likesAndSaved?.likes.length} */}
      </div>

      <img src='./ads2.png' alt='' />
    </div>
  );
};

export default page;
