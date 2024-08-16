'use client'
import React, { useState, useEffect } from 'react';
import { getUser } from '@/hooks/UserRequests';
import { RiBookmark3Fill, RiBookmark3Line, RiHeart2Fill, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri';
import parser from 'html-react-parser';
import { useLikePost, useEachPostQuery, useSavePost } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    id: string;
    size: number;
}

const LikeCommentShare = ({ id, size }: Props) => {
    const { post, isError, isLoading, refetch } = useEachPostQuery(id);
    const user = getUser();
    const [liked, setLiked] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);

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

    const handleLike = async () => {
        setLiked((prev) => !prev);
        try {
            likePostFn(parser(id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSave = async () => {
        setSaved((prev) => !prev);
        try {
            savePostFn(parser(id));
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
    );
};

export default LikeCommentShare;
