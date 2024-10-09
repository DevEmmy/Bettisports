'use client';
import React, { useEffect, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';

interface Props {
  activeIndex: number;
  stories: any;
  show: boolean;
}

const ViewStories = ( {activeIndex, stories, show} : Props) => {
  console.log(activeIndex)
  const [active, setActive] = useState(activeIndex);
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <div>
          <div className='black__overlay items-center h-[100vh] w-[100hw] grid max-sm:place-items-center sm:grid-cols-3 md:grid-cols-6 gap-3 justify-end px-3'>
            {active == 1 && <div className='w-full' />}
            {/* <p>tunji is a goat</p> */}
            
            {stories.slice(active - 2 < 0 ? 0 : active - 2, active + 2 ).map((item: any, i : number) => {
                return (
                  <div
                    className={` grid place-items-center w-full border  border-primary1 relative ${
                      i === active
                        ? 'h-[95vh] col-span-2 mx-auto place-self-center absolute  col-start-3 '
                        : 'h-[50vh] max-md:h-[40vh]'
                    }`}>
                      fghgjk
                    <img src={item?.media} className={`h-full absolute ${ i != active && 'blur-[2px]'  }`}
                      alt=''
                    />
                    {active == i ? (
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
                        <p className='font-[600] md:text-xl lg:text-2xl'>
                          {item?.title}
                        </p>
                          {/* {readMore ? parser(item?.content) : parser(item?.content)(0, 400)}{' '} */}
                          {/* {!readMore && '....'} */}
                          <p className={`!text-[11px]  mb-0.5 ${!readMore ? 'parser line-clamp-2' : 'overflow-y-auto' }`}>{parser(item?.content)}</p>
                          <span
                            className='text-orange-400 text-[10px]'
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
                                  i === active
                                      ? 'bg-white'
                                      : 'bg-gray-500/50 glass'
                                  }`}>
                                  &nbsp;&nbsp;
                                </div>
                              );
                            })}
                          </div>
                          <div className='flex items-center mt-3 justify-between'>
                              <img src={item?.author?.profilePicture} className='rounded-full size-8 shadow-sm border' />

                            <div className='text-white text-shadow mx-2'>
                            {/* {item?.date} */}
                            <TimeAgo date={item?.createdAt} />
                            {i} {active} {stories?.length}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className='p-1 bg-white rounded-full absolute bg-gradient-to-br via-pink-600 from-yellow-500 to-orange-600'>
                        <img src={item?.author?.profilePicture} className='rounded-full size-8' />
                      </div>
                    )}
                  </div>
                )
              })}

              {active + 3 > stories?.length   && <div className='w-full border h-[50vh] bg-red-600'> vgdkdcaghdca </div>} 
            </div>
        </div>
  );
};

export default ViewStories;