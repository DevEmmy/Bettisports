'use client'
import React, {useState, useEffect} from 'react'
import { getUser } from '@/hooks/UserRequests';
import {RiChat2Line, RiHeart2Fill, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri';
import parser from 'html-react-parser';
import { useLikePost, useEachPostQuery } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    id: string;
    size: number;
  }



const LikeCommentShare = ({id,size} : Props) => {
  const { post, isError, isLoading, refetch } = useEachPostQuery(id)
    const user = getUser();
    const [liked, setLiked] = useState<boolean>(false);

    const { likePostFn, isLikeLoading, isLikeError, error, isSuccess } = useLikePost();
    useEffect(() => {
      if (isSuccess) {
        refetch();
        toastSuccess('Liked Post');
        setLiked(true);
      }
    }, [isSuccess]);
  
    useEffect(() => {
      post?.likes.includes(user?._id) ? setLiked(true) : '';
      
    });
    console.log(user);
  
    const handleLike = async () => {
      try {
        likePostFn(parser(post?._id));
        console.log('success');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
  return (
    <div className={`flex gap-3 text-gray-500`}>

          {liked ? (
            <RiHeart2Fill size={size} className='text-red-600 cursor-pointer' />
          ) : (
            <RiHeart2Line size={size} className='cursor-pointer' onClick={handleLike} />
          )}
          <RiChat2Line size={size} className='cursor-pointer' />
          <RiShareForward2Line size={size} className='cursor-pointer' />
    </div>
  )
}

export default LikeCommentShare