'use client';
import { getUser } from '@/hooks/UserRequests';
import Image from 'next/image';
import React, {useState} from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';
import { RiBellLine, RiMenu2Fill } from 'react-icons/ri';
import LeftNav from './LeftNav';

const TopNav = () => {
  const [open, setOpen] = useState(false)
  const user = getUser();

  if (!user) {
    return null;
  }

  return (
    <div className='flex-center justify-between py-4 px-5 md:px-xPadding bg-white border-b fixed top-0 w-full md:w-4/5 right-0'>
       <div className='flex gap-2 items-center'>
            <RiMenu2Fill
              onClick={() => setOpen(true)}
              className='cursor-pointer md:hiddden'
            />
            <p className='font-[600]'>Howdy, {user.firstName}</p>
          </div>

      <div className='flex-center gap-2 md:gap-10 '>
        <HiOutlineBell size={24} />

        <div className='flex-center gap-1 md:gap-5'>
          <Image
            width={0}
            height={0}
            unoptimized
            src={user.profilePicture}
            alt=''
            className='pp'
          />
          <HiChevronDown />
         
        </div>
      </div>

      {open && <LeftNav setOpen={setOpen} />}
    </div>
  );
};

export default TopNav;
