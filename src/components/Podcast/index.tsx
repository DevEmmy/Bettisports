import React from 'react';
import Line from '../UI/Line';
import Each from './Each';
import { RiPlayCircleFill } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';

const Podcast = () => {
  return (
    <div className='bg-[#25282B] px-5 md:px-xPadding my-20 py-10'>
      <div className='flex items-center gap-3'>
        <p className='text-white'>PODCASTS</p>
        <Line />
      </div>

      <div className='sm:grid grid-cols-[3fr_1fr] mt-10 gap-5'>
        <div className='relative my-3'>
        {/* <p className='text-sm'>March 28, 2024 | 25min</p> */}
          <img src='./img.jpg' alt='' />
          <div className='overlay' />
          <div className='details md:p-10 p-2 w-full flex md:flex-col gap-2 items-center justify-between md:justify-normal'>
            <p className=' text-[20px] md:text-[28px] font-[700] line-clamp-3'>
              {'Lorem ipsum dolor tunji issa goat'.slice(0,50)}...
            </p>
            <p className='text-sm hidden md:flex'>March 28, 2024 | 25min</p>
            <div className='flex justify-end items-center'>
              <p className='text-sm hidden md:flex'>
                Lorem ipsum dolor sit amet consectetur. Adipiscing nisi
                suspendisse ullamcorper ornare nunc in. Massa habitasse enim
                nunc eu enim nulla risus adipiscing. Id eleifend faucibus sit
                semper id faucibus magna. Etiam a in dolor pulvinar congue. Nibh
                adipiscing maecenas urna blandit ultrices a diam tempus quam.
              </p>
              <div className='bg-[#373A3C]  rounded-full p-4'>
                <FaPlay className='text-defaultYellow w-6 h-6' />
              </div>
            </div>
          </div>
          <p className='md:hidden text-[8px] px-2 details  text-white'>March 28, 2024 | 25min</p>
        </div>

        <div className='flex flex-col divide-y'>
          {[1, 2, 3, 4, 5, 6, 7].map((video: any, i: number) => {
            return <Each key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
