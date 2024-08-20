'use client';
import React, { useState } from 'react';
import Line from '../UI/Line';
import Each from './Each';
import VerticalHeader from '../Shared/VerticalHeader';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useFetchStories } from '@/hooks/PostRequests';
import Loader from '../Loader';

const Stories = () => {
  const [active,setActive] = useState(2);
  const news = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: '1 Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: '2 Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
  ];

  const { stories, isError, isLoading } = useFetchStories();
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  return (
    <div className='md:grid grid-cols-[4fr_1.5fr] md:px-xPadding px-5 my-10 gap-10'>
      <div className='flex flex-col gap-5 my-2'>
        <VerticalHeader title='Stories' />

          <div className='flex gap-5 overflow-x-auto relative'>
          {isLoading ? (
            <Loader />
          ) : stories?.length > 0 ? (
            stories?.map((newsItem: any, i: number) => {
              return <Each item={newsItem} key={i} />;
            })
          ) : (
            <p>There are no stories currently</p>
          )}

          {stories?.length > 0 && (
            <>
              <div className='carousel_btn left-2'>
                <RiArrowLeftSLine className='w-6 h-6' />
              </div>
              <div className='carousel_btn right-2'>
                <RiArrowRightSLine className='w-6 h-6' />
              </div>
            </>
          )}


           {/* Testing */}
{/*         
        {
          news?.map((item: any, i: number) => {
            return (
            <div className={`min-w-[25%] h-[400px] relative`}>
              <img src={"./img.jpg"} alt="" className='w-full h-full object-cover' />

              <div className="overlay" />


              <div className="details p-3">
                <p className='text-[10px]'>{item?.date}</p>
                <p className='font-[600]'>
                {i == active ? 'Active' : 'normal'}  {item?.title} 
                </p>
              </div>
            </div>
            )
          })
        }

        
              <div className='carousel_btn left-2'>
                <RiArrowLeftSLine className='w-6 h-6' />
              </div>
              <div className='carousel_btn right-2'>
                <RiArrowRightSLine className='w-6 h-6' />
              </div> */}
  

        </div>


      </div>

      <div className='flex flex-col gap-5'>
        <VerticalHeader title='Online Radio and Podcast' />

        <img src='./radio.png' alt='' />

        <div className='flex flex-col gap-2'>
          <p className='uppercase border-b border-b-gray-600'>
            latest podcast episode
          </p>

          <div className='grid grid-cols-[1.5fr_5fr_1fr] gap-2 border-2 p-2'>
            <img src='./img.jpg' alt='' className='h-[80px]' />
            <div className='grid'>
              <p className='uppercase text-sm font-[600]'>the sport pulse</p>
              <p className='text-[10px]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat et mollitia error iure odio corrupti voluptatem.
              </p>
            </div>
            <div className='text-[10px] grid'>
              <p>35min</p>

              <p>April 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
