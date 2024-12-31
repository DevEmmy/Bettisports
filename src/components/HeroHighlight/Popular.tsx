'use client';
import { useFetchPopular } from '@/hooks/PostRequests';
import Loader from '../Loader';
import Link from 'next/link';
import parse from 'html-react-parser'
import LikeCommentShare from '../UI/LikeCommentShare';
import CategoryBlog from './CategoryBlog';

const Popular = ({howMany} : any) => {
  const { popular, isError, isLoading } = useFetchPopular();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : popular.length > 0 ? (
        popular.slice(0,howMany).map((item: any, i: number) => {
          return (
            <CategoryBlog item={item} key={i} />
          );
        })
      ) : (
        <p>There are no popular posts available</p>
      )}
    </>
  );
};

export default Popular;