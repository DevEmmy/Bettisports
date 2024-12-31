'use client';
import { usePostQuery } from '@/hooks/PostRequests';
import Loader from '../Loader';
import Link from 'next/link';
import parse from 'html-react-parser'
import LikeCommentShare from '../UI/LikeCommentShare';
import CategoryBlog from './CategoryBlog';

const Recents = ({howMany} : any) => {
  const { posts, isError, isLoading } = usePostQuery();
  const slicedPosts = posts?.slice(0,howMany);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : posts.length > 0 ? (
        slicedPosts.map((item: any, i: number) => {
          return (
            <CategoryBlog item={item} key={i} />
          );
        })
      ) : (
        <p>There are no recent posts available</p>
      )}
    </>
  );
};

export default Recents;