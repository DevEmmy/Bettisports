'use client';
import React, { useEffect, useState } from 'react';
import PostedBy from './PostedBy';
import Articles from '../Articles';
import CommentForm from './CommentForm';
import Comments from './Comments';
import {
  RiBookmarkLine,
  RiChat2Line,
  RiFacebookLine,
  RiHeart2Line,
  RiLinkedinLine,
  RiShareForward2Line,
  RiShareLine,
  RiTwitterLine,
} from 'react-icons/ri';
import TitleHeader from '../UI/TitleHeader';
import Tag from './Tag';
import { useEachPostQuery, useFetchPostComment } from '@/hooks/PostRequests';
import Loader from '../Loader';
import parser from 'html-react-parser';
import { useLikePost } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
  id: string;
}

const BlogContent = ({ id }: Props) => {
  const [liked, setLiked] = useState<boolean>(false);

  
  console.log(id);
  const { post, isError, isLoading } = useEachPostQuery(id);
  const { comments, isErr, isLoad } = useFetchPostComment(id);
  const { likePostFn, isLikeLoading, isLikeError, error, isSuccess } = useLikePost();
  useEffect(() => {
    if(isSuccess) {
      toastSuccess('Liked Post');
      setLiked(true);
    }
  }, [isSuccess]);


  const handleLike = async () => {
    try {
      likePostFn(parser(id));
      console.log('success');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  if (isLoading) {
    return <Loader />;
  }
  

  return (
    <div>
      <p className='text-[12px]'>Category</p>
      <TitleHeader title={post.title} />
      <PostedBy author={post.author} createdAt={post.createdAt} />

      <div className='my-5 flex flex-col gap-5 text-[#25282B]'>
        <img src={post.media} alt={post.title} />
        <div>{parser(post.content)}</div>
        <div className='flex gap-3'>
          <RiHeart2Line
            size={18}
            className={`${liked ? 'bg-red-700' : ''} `}
            onClick={handleLike}
          />
          <RiChat2Line size={18} className='bg-red-500' />
          <RiShareForward2Line size={18} />
        </div>
      </div>

      {/* <Comments id={`${id}`}/>  */}
      {isLoad ? (
        <Loader />
      ) : comments.length > 0 ? (
        <Comments comments={comments} />
      ) : (
        <p>There are no comments</p>
      )}

      <CommentForm postId={id} />
    </div>
  );
};

export default BlogContent;
