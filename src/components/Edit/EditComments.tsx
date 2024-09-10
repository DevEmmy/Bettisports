'use client';
import React, {useState, ChangeEvent,useEffect} from 'react'
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import { useDeleteCommentQuery, useUpdateCommentQuery, useFetchComments } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    commentData : {
        _id: string;
        author: {
            _id: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            profilePicture: string;
            likes: string[];
            saved: string[];
            role: string;
            createdAt: string;
            updatedAt: string;
          };
        comment: string;
        inResponse: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

const EditComments = ({commentData} : Props) => {
    const [showEdit, setShow] = useState(false);
    const [comment, setComment] = useState(commentData?.comment);
    const { deleteCommentFn, deleteSuccess} = useDeleteCommentQuery(commentData?._id);
    const { refetch } = useFetchComments();

    // const {user} = useFetchUserById(commentData?._id);
    const { updateCommentFn, isLoading, isError, error, isSuccess } = useUpdateCommentQuery(commentData?._id);

    const handleDelete = async () => {
        try {
            deleteCommentFn();
            refetch()
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
                // refetch();
        const commentVal = {
            author : commentData?.author,
            comment : comment,
            inResponse : commentData?.inResponse,
        }
        try {
            updateCommentFn(commentVal);
            refetch()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        refetch();
        setShow(false);
        if(deleteSuccess) {
            toastSuccess('Comment deleted successfully');
           
        }
        if (isSuccess) {
            toastSuccess('Comment Updated');
        }
    }, [deleteSuccess, isSuccess])
  return (
    <div>
        <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 px-1 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span
          className='text-red-700 borde-x-2 px-1 cursor-pointer'
          onClick={handleDelete}>
          Trash
        </span>
        <Link href={`/blog`} className='text-green-600 px-1 cursor-pointer'>
          Approve
        </Link>
        <span className='text-orange-600 px-1 cursor-pointer'>
          Spam
        </span>
        </div>

        {showEdit && (
        <div className='grid place-items-center justify-between'>
            <div className='black__overlay' onClick={() => setShow(false)} />

            <div className='fixed z-[1000] md:w-2/3  left-0 right-0 top-0 bottom-0 m-auto h-fit mx6 bg-white p-10 setings md:gap-5'>
                <button
                    onClick={() => setShow(false)}
                    className='top-0 absolute right-0 text-gray-500 p-3'
                >
                    <HiX className='cursor-pointer' size={20} />
                </button>

                <div className="grid grid-cols-[1fr_4fr]">

                    <div className='gap-2 text-center'>
                        <p className='text-left mb-5'>Commentd By:</p>
                        <img src={commentData?.author.profilePicture} alt={commentData?.author.firstName} className='border rounded-full size-[70px] mx-auto' />
                        <div className='!text-xs'>
                            <p className='!text-xs'>{commentData?.author.firstName} {' '} {commentData?.author.lastName}</p>
                            <p className='text-secondaryBlue text-xs'>
                                {commentData?.author.email}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor=''>Edit comment</label>
                            <textarea
                                name='' id=''
                                className='border p-3'
                                value={comment}
                                rows={7}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                    setComment(e.target.value)
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <button className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit ' onClick={handleSubmit}>
                                {isLoading ? 'Updating Comment...' : 'Update Comment' }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}

    </div>
  )
}

export default EditComments