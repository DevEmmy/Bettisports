import React from 'react';
import EachVideo from '../Videos/EachVideo';
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight';
// import MdFootallBlogHighlight from '../FootballNews/MdFootallBlogHighlight'
import MdFootballBlogHighlight from '../FootballNews/MdFootallBlogHighlight';

const InternationalFootball = () => {
  const filter = [
    {
      title: 'ALL',
      link: '/',
    },
    {
      title: 'MEN',
      link: '/',
    },
    {
      title: 'WOMEN',
      link: '/',
    },
  ];

  const filterII = [
    {
      title: 'ALL',
      link: '/',
    },
    {
      title: 'AFRICA',
      link: '/',
    },
    {
      title: 'AMERICA',
      link: '/',
    },
    {
      title: 'EUROPE',
      link: '/',
    },
    {
      title: 'ASIA',
      link: '/',
    },
    {
      title: 'AUSTRALIA',
      link: '/',
    },
    {
      title: 'BEST OF THE WORLD',
      link: '/',
    },
  ];

  return (
    <div className='my-10 px-5 md:px-xPadding'>
      <div className='flex items-center justify-between pb-5 border-b-4 border-b-secondaryBlue'>
        <p>INTERNATIONAL FOOTBALL</p>

        <div className='flex gap-5'>
          {filter.map((item: any, i: number) => {
            return (
              <p className='text-[14px]' key={i}>
                {item?.title}
              </p>
            );
          })}
        </div>
      </div>

      <div className='my-5 hidden  md:flex gap-5 items-end justify-end overflow-x-auto'>
        {filterII.map((item: any, i: number) => {
          return (
            <p className='text-[14px] w-fit' key={i}>
              {item?.title}
            </p>
          );
        })}
      </div>

      <div className='justify-right py-4 my-2 md:hidden justify-end justify-items-end'>
        <select name='' id='' className='px-2 py-3 right-0 w-full sm:w-min md:w-fit'>
          {filterII.map((item: any, i: number) => {
            return (
              <option className='text-[14px] w-fit' key={i}>
                {item?.title} g
              </option>
            );
          })}
        </select>
      </div>

      <div className='grid grid-cols-[3fr_1fr] gap-5'>
        <div className='md:grid grid-cols-2 gap-5'>
          <div className='flex flex-col gap-2 divide-y'>
            <EachVideo />
            {/* <SmFootballBlogHighlight />
                        <SmFootballBlogHighlight />
                        <SmFootballBlogHighlight />
                        <SmFootballBlogHighlight /> */}
          </div>

          <div className='flex flex-col gap-2 divide-y'>
            {/* <MdFootballBlogHighlight />
                        <MdFootballBlogHighlight />
                        <MdFootballBlogHighlight />
                        <MdFootballBlogHighlight />
                        <MdFootballBlogHighlight /> */}
          </div>
        </div>

        <img src='./ads2.png' alt='' />
      </div>
    </div>
  );
};

export default InternationalFootball;
