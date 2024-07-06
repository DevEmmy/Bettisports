'use client';
import { useFetchTrending } from '@/hooks/PostRequests';
import Loader from '../Loader';

const Trending = () => {
  const { trending, isError, isLoading } = useFetchTrending();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : trending?.length > 0 ? (
        trending?.map((item: any, i: number) => {
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
        <p>There are no trending posts available</p>
      )}
    </>
  );
};

export default Trending;