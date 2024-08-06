'use client'
import React, {useState, useEffect} from 'react'
import { getUser } from '@/hooks/UserRequests';
import {RiBookmark2Line, RiBookmark3Fill, RiBookmark3Line, RiChat2Line, RiHeart2Fill, RiHeart2Line, RiShareForward2Fill, RiShareForward2Line, RiShareForwardLine } from 'react-icons/ri';
import parser from 'html-react-parser';
import { useLikePost, useEachPostQuery, useSavePost } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    id: string;
    size: number;
  }



const LikeCommentShare = ({id,size} : Props) => {
  const { post, isError, isLoading, refetch } = useEachPostQuery(id)
    const user = getUser();
    const [liked, setLiked] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);

    const { likePostFn, isLikeLoading, isLikeError, error, isSuccess } = useLikePost();
    const { savePostFn, isSaveLoading, isSaveError, isSaveSuccess } = useSavePost();


    useEffect(() => {
      if (isSuccess) {
        refetch();
        liked ? toastSuccess('Like Post') : toastSuccess('Unliked Post');
      }
      if (isSaveSuccess) {
        refetch();
        saved ? toastSuccess('Saved Post') : toastSuccess('Unsaved post');
      }
    }, [isSuccess, isSaveSuccess]);
  
    // To Cjeck if user?._id is in post.likes 
    useEffect(() => {
      post?.likes.includes(user?._id) ? setLiked(true) : setLiked(false);
      post?.author?.saved.includes(id) ? setSaved(true) : setSaved(false);
    }, [post]);

    // console.log(user);
  
    const handleLike = async () => {
      setLiked(!liked);
      try {
        likePostFn(parser(id));
        console.log('success');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handleSave = async () => {
      setSaved(!saved);
      try {
        savePostFn(parser(id));
        console.log('success');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
  return (
    <div className={`flex gap-2 text-gray-500`}>

          {liked ? (
            <RiHeart2Fill size={size} className='text-red-600 cursor-pointer' onClick={handleLike} />
          ) : (
            <RiHeart2Line size={size} className='cursor-pointer' onClick={handleLike} />
          )}
          
          {saved ? (
            <RiBookmark3Fill size={size} className='text-green-600 cursor-pointer' onClick={handleSave} />
          ) : (
            <RiBookmark3Line size={size} className='cursor-pointer' onClick={handleSave} />
          )}
          <RiShareForward2Line size={size} className='cursor-pointer' />
        
    </div>
  )
}

export default LikeCommentShare