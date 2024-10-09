'use client';
import React, { useState, useEffect } from 'react';
import Line from '../UI/Line';
import Each from './Each';
import VerticalHeader from '../Shared/VerticalHeader';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseFill } from 'react-icons/ri';
import { useFetchStories } from '@/hooks/PostRequests';
import Loader from '../Loader';
import ViewStories from './ViewStories';

const Stories = () => {
  const [active,setActive] = useState<number>(0);
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

  const { stories, isError, isLoading, refetch } = useFetchStories();
  let currentOffset = 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show,setShow] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(2); // adjust this value to set the number of slides per page
  const [totalSlides, setTotalSlides] = useState(stories?.length ?? 0);

  useEffect(() => {
    setTotalSlides(stories?.length  ?? 0);
  }, [stories]);

  const handleNextSlide = () => {
    if (currentIndex + slidesPerPage < totalSlides) {
      setCurrentIndex(currentIndex + 1);
      setTranslateX(translateX - 100 / slidesPerPage); // adjust this value based on your slide width
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslateX(translateX + 100 / slidesPerPage); // adjust this value based on your slide width
    }
  };

  return (
    <>
    {
      show && (
        <>
          <span className='z-[1000] fixed text-white p-2.5 rounded-full bg-black glass text-3xl right-3 top-3 cursor-pointer' onClick={() => setShow(!show)}>
            <RiCloseFill size={25}/>
          </span>
          <ViewStories activeIndex={active} stories={stories} show={show} />
        </>
      )
    }
    <div className='md:grid grid-cols-[4fr_1.5fr] md:px-xPadding px-5 my-10 gap-10'>


      <div className='flex flex-col gap-5 my-2'>
        <VerticalHeader title='Stories' />

        <div className="overflow-x-hidden relative">
      {isLoading ? (
        <Loader />
      ) : totalSlides > 0 ? (
        <div
          className="flex transition duration-500 ease-in-out gap-2 w-full"
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${totalSlides / slidesPerPage * 100}%`,
          }}
        >
          {stories?.slice(0,11).map((item : any, index : number) => (
            <div className='grow cursor-pointer' onClick={() => { setActive(index); setShow(true);  }}>
              <Each key={index} item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>There are no stories currently</p>
      )}

      {totalSlides > 0 && (
        <>
          <div className="stories_btn left-2" onClick={handlePrevSlide}>
            <RiArrowLeftSLine className="w-6 h-6" />
          </div>
          <div className="stories_btn right-2" onClick={handleNextSlide}>
            <RiArrowRightSLine className="w-6 h-6" />
          </div>
        </>
      )}
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

    </>
  );
};

export default Stories;
