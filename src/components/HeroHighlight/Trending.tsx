'use client';
import { useFetchTrending } from '@/hooks/PostRequests';
import Loader from '../Loader';
import parse from 'html-react-parser';
import Link from 'next/link'
import LikeCommentShare from '../UI/LikeCommentShare';

const Trending = ({howMany} : any) => {
  const { trending, isError, isLoading } = useFetchTrending();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : trending?.length > 0 ? (
        trending.slice(0,howMany).map((item: any, i: number) => {
          return (
            <div
            key={i}
            className='flex justify-between gap-2 py-3'>
            <div className='flex gap-2 flex-col '>
              <Link href={`/blog/${item?._id}`} >
                <p className='text-[14px] font-[500]'>{item?.title}</p>
                <p className='text-[12px] font-[400] line-clamp-2 parser'>
                  {parse(item?.content)}
                </p>
              </Link>
              
              <LikeCommentShare id={item._id} size={13} />
            </div>

            <img src={item?.media} width={100} height={100} alt='' />
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
