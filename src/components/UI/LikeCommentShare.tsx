'use client'
import React, { useState, useEffect } from 'react';
import { getUser } from '@/hooks/UserRequests';
import { RiBookmark3Fill, RiBookmark3Line, RiCloseLine, RiHeart2Fill, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri';
import parser from 'html-react-parser';
import { useLikePost, useEachPostQuery, useSavePost } from '@/hooks/PostRequests';
import { toastSuccess, toastError } from '@/utils/toast';
import {ShareSocial} from 'react-share-social';
import { redirect } from 'next/navigation';

interface Props {
    id: string;
    size: number;
}

const style = {
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
  
    },
    copyContainer: {
      border: '1px solid blue',
      background: 'rgb(0,0,0,0.7)'
    },
    title: {
      color: '#555',
      
    //   fontStyle: 'italic'
    }
  };

const LikeCommentShare = ({ id, size }: Props) => {
    const { post, isError, isLoading, refetch } = useEachPostQuery(id);
    const user = getUser();
    const [liked, setLiked] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [show,setShow] = useState<boolean>(false);

    const { likePostFn, isSuccess: isLikeSuccess } = useLikePost();
    const { savePostFn,  isSaveSuccess } = useSavePost();

    // Initialize liked and saved state based on fetched post data
    useEffect(() => {
        if (post && user) {
            setLiked(post.likes.includes(user._id));
            console.log(user.saved)
            setSaved(user.saved.includes(id));
        }
    }, [post, user]);

    // Handle success for like and save operations
    useEffect(() => {
        if (isLikeSuccess) {
            refetch();
            toastSuccess(liked ? 'Liked Post' : 'Unliked Post');
        }
        if (isSaveSuccess) {
            refetch();
            toastSuccess(saved ? 'Saved Post' : 'Unsaved post');
        }
    }, [isLikeSuccess, isSaveSuccess, liked, saved]);


    const checkUser = () => {
        if (!user) {
            // alert('Login needed');
            toastError('You need to be logged in');
            redirect('/sign-in')
            return; // Stop function execution if no user
        }
    }

    
    const handleLike = async () => {

        checkUser();
        
        const newLikedState = !liked;
        setLiked(newLikedState);

        try {
            likePostFn(parser(id));
        } catch (error) {
            console.error('Error:', error);
            setLiked(!newLikedState); 
        }
    };

    const handleSave = async () => {

        checkUser();
        
        setSaved((prev) => !prev);
        try {
            savePostFn(parser(id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
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
                <RiShareForward2Line size={size} className='cursor-pointer' onClick={() => setShow(!show)} />
            </div>
            {show && (
                <div className=' absolute border shadow-lg z-[999999]'>
                    <div className='black__overlay' onClick={() => setShow(!show)}/>
                    <div className='relative z-[999999]'>
                    <ShareSocial 
                        title='Share the latest football insights:'
                        url = {`/blog/${post?._id}`}
                        socialTypes={['facebook','twitter','reddit','linkedin','whatsapp']}
                        style={style}
                    />
                    <button className='absolute top-3 right-3 z-[999999] text-gray-600 hover:text-gray-400' onClick={() => setShow(false)}>
                            <RiCloseLine size={26} />
                    </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default LikeCommentShare;
