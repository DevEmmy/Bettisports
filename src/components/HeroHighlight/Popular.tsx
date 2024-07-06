'use client';
import { useFetchPopular } from '@/hooks/PostRequests';
import Loader from '../Loader';

const Popular = () => {
  const { popular, isError, isLoading } = useFetchPopular();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : popular.length > 0 ? (
        popular.map((item: any, i: number) => {
          return (
            <div className='flex justify-between gap-2 py-3' key={i}>
              <div className='flex gap-2 flex-col text-grayColor'>
                <p className='text-[14px] font-[500]'>{item.title}</p>
                <p className='text-[12px] font-[400]'>
                  {item?.date ? item?.date : 'March 23, 2024'}
                </p>
              </div>

              <img
                src={item?.media ? item?.media : './img.jpg'}
                width={100}
                height={100}
                alt={`${item.title} on ${item.date}`}
              />
            </div>
          );
        })
      ) : (
        <p>There are no popular posts available</p>
      )}
    </>
  );
};

export default Popular;