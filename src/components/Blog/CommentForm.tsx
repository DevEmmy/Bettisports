'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { getUser } from '@/hooks/UserRequests';
import { useCreateComment } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

interface Props {
    postId: string;
}

const CommentForm = ({postId} : Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');

  const {createCommentFn, error, isError, isLoading, isSuccess} = useCreateComment()

  const user = getUser();

  const handleSubmit = async () => {
    const commentData = {
        author : user?._id,
        comment,
        inResponse : postId,
    }

    try {
        createCommentFn(commentData)
        console.log('Success:', commentData);
    } catch (error) {
        console.error('Error:', error);
    }
  }

  useEffect(()=>{
    if(isSuccess){
        toastSuccess("Post Uploaded");
        setComment('');
    }
}, [isSuccess])
  return (
    <div className='flex flex-col gap-5 my-5'>
      <p className='text-[36px] font-[700]'>Leave a Reply</p>
      {!user && (
        <p className='text-[#52575C]'>
            Your email address will not be published. Required fields are marked *
        </p>
      )}

      <div className='grid grid-cols-3 comment gap-3'>
        {!user && (
          <>
            <div>
              <label htmlFor=''>Name *</label>
              <input
                type='text'
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor=''>Email *</label>
              <input
                type='email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor=''>Website *</label>
              <input
                type='text'
                value={website}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setWebsite(e.target.value)
                }
                disabled
              />
            </div>
          </>
        )}

        <div className='col-span-3'>
          <label htmlFor=''>Write your comments here. *</label>
          <textarea
            name=''
            id=''
            value={comment}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setComment(e.target.value)
            }
          />
        </div>
      </div>


      {
        !user && (
            <div className='flex items-center gap-5'>
                <input type='checkbox' name='' id='' />
                <p>
                    Save my name, email, and website in this browser for the next time I comment.
                </p>
            </div>
        )
      }

      <button className='bg-primary1 w-fit p-3 text-white' onClick={handleSubmit}>
        {isLoading ? 'Posting...' : 'Post Comment'}
      </button>
    </div>
  );
};

export default CommentForm;
