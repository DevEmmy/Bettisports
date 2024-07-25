'use client';
import { useFetchPopular } from '@/hooks/PostRequests';
import Loader from '../Loader';
import Link from 'next/link';
import parse from 'html-react-parser'
import LikeCommentShare from '../UI/LikeCommentShare';

const Popular = ({howMany} : any) => {
  const { popular, isError, isLoading } = useFetchPopular();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : popular.length > 0 ? (
        popular.slice(0,howMany).map((item: any, i: number) => {
          return (
            <Link
            href={`/blog/${item?._id}`}
            key={i}
            className='flex justify-between gap-2 py-3'>
            <div className='flex gap-2 flex-col text-grayColor'>
              <p className='text-[14px] font-[500]'>{item?.title}</p>
              <p className='text-[12px] font-[400] line-clamp-2 parser'>
                {parse(item?.content)}
              </p>
              <LikeCommentShare post={item} size={13} />
            </div>

            <img src={item?.media} width={100} height={100} alt='' />
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