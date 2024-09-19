import Image from 'next/image';
import React from 'react';
import Menu from '../MainNav/Menu';
import Link from 'next/link';

const TopNav = () => {
  return (
    <div className='md:flex flex-row-reverse justify-between md:px-xPadding px-4 py-5 md:py-[25px]'>
      <Image
        src='/./hero2.svg'
        unoptimized
        width={200}
        height={200}
        alt=''
        className='h-[80px] w-auto object-cover'
      />
      <div className='w-full flex justify-between gap-3 mt-4 md:mt-0'>
        <Link href='/' className='w-2/5 md:w-[200px]'>
          <Image
            src='/./logo.svg'
            unoptimized
            width={0}
            className='object-contain w-full h-auto'
            height={0}
            alt=''
          />
        </Link>

        <div className='md:hidden'>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
