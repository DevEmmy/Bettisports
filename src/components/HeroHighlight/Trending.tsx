'use client';
import { useFetchTrending } from '@/hooks/PostRequests';
import Loader from '../Loader';
import parse from 'html-react-parser';
import Link from 'next/link'
import LikeCommentShare from '../UI/LikeCommentShare';
import CategoryBlog from './CategoryBlog';

const Trending = ({howMany} : any) => {
  const { trending, isError, isLoading } = useFetchTrending();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : trending?.length > 0 ? (
        trending.slice(0,howMany).map((item: any, i: number) => {
          return (
            <CategoryBlog item={item} key={i} />
          );
        })
      ) : (
        <p>There are no trending posts available</p>
      )}
    </>
  );
};

export default Trending;
