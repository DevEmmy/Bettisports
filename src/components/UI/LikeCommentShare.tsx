'use client'
import React, {useState, useEffect} from 'react'
import { getUser } from '@/hooks/UserRequests';
import {RiChat2Line, RiHeart2Fill, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri';
import parser from 'html-react-parser';
import { useLikePost, usePostQuery } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    post: any;
    size: number;
  }

const LikeCommentShare = ({post,size} : Props) => {
    const user = getUser();
    const [liked, setLiked] = useState<boolean>(false);

    const { likePostFn, isLikeLoading, isLikeError, error, isSuccess } = useLikePost();
    useEffect(() => {
      if (isSuccess) {
        toastSuccess('Liked Post');
        setLiked(true);
      }
    }, [isSuccess]);
  
    useEffect(() => {
      post?.likes?.includes(user?._id) ? setLiked(true) : '';
    },[]);
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
    <div className={`flex gap-3`}>
          {liked ? (
            <RiHeart2Fill size={size} className='text-red-600' />
          ) : (
            <RiHeart2Line
              size={size}
              className={`${liked ? 'text-red-600' : ''} `}
              onClick={handleLike}
            />
          )}
          <RiChat2Line size={size} className='' />
          <RiShareForward2Line size={size} />
    </div>
  )
}

export default LikeCommentShare