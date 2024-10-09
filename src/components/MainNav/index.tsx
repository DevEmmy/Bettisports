'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { getUser } from '@/hooks/UserRequests';
import Menu from './Menu';

const MainNav = () => {
  const nav = [
    {
      title: 'HOME',
      link: '/',
    },
    {
      title: 'LIVE',
      link: '/live',
    },
    {
      title: 'INTERNATIONAL',
      link: '/international',
    },
    {
      title: 'REGIONS',
      link: '/regions',
    },
    {
      title: 'NEWS',
      link: '/news',
    },
    {
      title: 'ARTICLE',
      link: '/article',
    },
    {
      title: 'MATCHDAYS',
      link: '/match-days',
    },
    {
      title: 'INTERVIEWS',
      link: '/interviews',
    },
    {
      title: 'TRANSFERS',
      link: '/transfers',
    },
    {
      title: 'FANTASY',
      link: '/fantasy',
    },
    {
      title: 'SUBSCRIBE',
      link: '/subscribe',
    },
  ];
  return (
    <>
    <div className="md:hidden w-[100%] ">
      <select className='px-2 py-2'>
      {nav.map((item: any, i: number) => {
        return (
          <option key={i} className='text-[12px]'>
            <Link href={item?.link}>{item?.title}</Link>
          </option>
        );
      })}
      </select>
    </div>
    <div className='hidden w-full md:flex items-center justify-between px-xPadding border-b-gray-400 border-b py-3 md:py-5 gap-5 overflow-x-auto scrollbar-thin'>
      {nav.map((item: any, i: number) => {
        return (
          <Link href={item?.link} key={i} className='text-[12px]'>
            <p>{item?.title}</p>
          </Link>
        );
      })}

      {/* <div className='flex'> */}
        <Menu />
    </div>
    </>
  );
};

export default MainNav;
