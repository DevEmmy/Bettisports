import React from 'react';
import { RiShareForwardLine, RiThumbUpLine } from 'react-icons/ri';

const EachComment = ({ item }: any) => {
  const date = new Date(item.updatedAt);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour: number = date.getHours(); // changed to let
  let minute: string = date.getMinutes().toString(); // changed to string
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  minute = minute.padStart(2, '0');

  const { firstName, lastName, profilePicture } = item.author;

  return (
    <div className='md:flex  gap-3 border p-4 '>
      <img
        src={profilePicture}
        alt=''
        className='size-[40px] hidden md:flex rounded-full'
      />
      <div className='flex justify-between gap-5 flex-col'>
        <div className='flex  justify-between gap-2 items-center'>
          <div className='w-2/3 items-center flex gap-1.5 '>
            <img
              src={profilePicture}
              alt=''
              className='size-[38px] border md:hidden rounded-full'
            />
            <div className='gap-0'>
              <p className='font-[600]'>
                {firstName} {lastName}
              </p>
              <p className='text-[10px] md:hidden text-gray-700'>
                {/* March 24, 2023 at 4:14am */}
                {`${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`}
              </p>
            </div>
          </div>

          <p className='hidden md:flex text-sm text-gray-700'>
            {/* March 24, 2023 at 4:14am */}
            {`${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`}
          </p>
        </div>

        <p className='text-gray-500'>{item.comment}</p>

        <div className='actions flex items-center justify-between'>
          <div>
            <RiShareForwardLine />
            <p>Share</p>
          </div>

          <div>
            <RiThumbUpLine />
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachComment;
