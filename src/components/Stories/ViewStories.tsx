'use client';
import React, { useEffect, useState } from 'react';
import {
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from 'react-icons/ri';

const ViewStories = () => {
  const [active, setActive] = useState<number>(3);
  const [readMore, setReadMore] = useState<boolean>(false);
  const title =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio alias mollitia impedit vitae suscipit, deleniti itaque, accusamus aut nihil doloremque autem amet dolorum exercitationem rerum incidunt ut eveniet ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio alias mollitia impedit vitae suscipit, deleniti itaque, accusamus aut nihil doloremque autem amet dolorum exercitationem rerum incidunt ut eveniet ducimus?';
  const stories = [
    {
      _id: 0,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: '1 Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 2,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: '2 Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 3,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 4,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 5,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 6,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
    {
      _id: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      date: 'March 28, 2024',
      title: 'Alexander Isak Speaks Out On His Newcastle Future Amid ',
    },
  ];

  return (
    <div className='black__overlay  items-center grid  max-sm:place-items-center sm:grid-cols-3 md:grid-cols-6 gap-3 justify-end px-3'>
      {active == 1 && <div className='w-full' />}
      {/* <p>tunji is a goat</p> */}
      
      {stories.slice(active - 2 < 0 ? 0 : active - 2, active + 3).map((item: any, i: number) => {
          return (
            <div
              className={` grid place-items-center w-full border  border-primary1 relative ${
                item._id === active
                  ? 'h-[95vh] col-span-2 mx-auto place-self-center absolute  col-start-3 '
                  : 'h-[50vh] max-md:h-[40vh] '
              }`}>
                fghgjk
              <img
                src='/img.jpg'
                className={`h-full absolute ${
                  item?._id != active && 'blur-[2px]'
                }`}
                alt=''
              />
              {active == item._id ? (
                <>
                  <span
                    className='text-white rounded-full absolute -left-2 bg-gray-700 glass z-50 cursor-pointer '
                    onClick={() => setActive(active - 1 < 0 ? 0 : active - 1)}>
                    <RiArrowLeftSLine className='size-7' />
                  </span>
                  <span
                    className='text-white rounded-full absolute -right-2 bg-gray-700 glass '
                    onClick={() => {
                      stories?.length - (active + 1) > 0
                        ? setActive(active + 1)
                        : setActive(stories.length - 1);
                    }}>
                    <RiArrowRightSLine className='size-7' />
                  </span>
                  <div className='absolute bottom-0 text-white px-3 !text-[14px] bg-black/5'>
                    {readMore ? title : title.slice(0, 400)}{' '}
                    {!readMore && '....'}
                    <span
                      className='text-orange-400'
                      onClick={() => setReadMore(!readMore)}>
                      {readMore ? 'Read Less' : 'Read More'}
                    </span>
                  </div>

                  <div className='gap-2 my-1 px-3 top-0 w-full text-black absolute'>
                    <div className='flex gap-2 mb-2'>
                      {stories?.map((item: any, i: number) => {
                        return (
                          <div
                            className={`!h-1 w-full rounded-lg shadow-sm ${
                              item?._id === active
                                ? 'bg-white'
                                : 'bg-gray-500/50 glass'
                            }`}>
                            &nbsp;&nbsp;
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex items-center mt-3 justify-between'>
                        <img src='/img2.png' className='rounded-full size-8 shadow-sm border' />
                      <div className='text-white text-shadow mx-2'>{item?.date}</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className='p-1 bg-white rounded-full absolute bg-gradient-to-br via-pink-600 from-yellow-500 to-orange-600'>
                  <img src='/img2.png' className='rounded-full size-8' />
                </div>
              )}
            </div>
          )
        })}
    </div>
  );
};

export default ViewStories;