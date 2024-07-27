'use client';
import { useFetchPopular } from '@/hooks/PostRequests';
import Loader from '../Loader';
import Link from 'next/link';

const Popular = ({howMany} : any) => {
  const { popular, isError, isLoading } = useFetchPopular();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : popular.length > 0 ? (
        popular.slice(0,howMany).map((item: any, i: number) => {
          return (
            <Link href={`/blog/${item?._id}`} className='flex justify-between gap-2 py-3' key={i}>
              <div className='flex gap-2 flex-col text-grayColor'>
                <p className='text-[14px] font-[500]'>{item?.title}</p>
                <p className='text-[12px] font-[400]'>
                  {item?.date ? item?.date : 'March 23, 2024'}
                </p>
              </div>

              <img
                src={item?.media}
                width={100}
                height={100}
                alt={`${item?.title} on ${item?.date}`}
              />
            </Link>
          );
        })
      ) : (
        <p>There are no popular posts available</p>
      )}
    </>
  );
};

export default Popular;