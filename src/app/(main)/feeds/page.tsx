'use client';
import EachFeed from '@/components/Feeds/EachFeed';
import GrayLine from '@/components/UI/GrayLine';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { getUser } from '@/hooks/UserRequests';
import { useCreateFeed, useFetchFeeds } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';
import Loader from '@/components/Loader';

const page = () => {
  const {feeds,feedIsError, feedIsLoading } = useFetchFeeds();
  const  {createFeedFn, isLoading , isError , error, isSuccess }   = useCreateFeed();
  const [active, setActive] = useState(0);
  const [feedContent,setFeedContent] = useState<string>('');
  useEffect(() => {
    if(isSuccess) toastSuccess('Feed uploaded');
  }, [isSuccess]);


  const user = getUser();

  if (!user) {
    return null;
  }


  const filter = [
    'Trending',
    'Popular',
    'Recommended',
    'New Topic',
    'Mentions',
  ];
  

  const handleSubmit = async () => {
    const postFeed = {
        content : feedContent,
        postedBy: user?._id,
        likes: [],
        image: ''
    }

    try {
        createFeedFn(postFeed);
        console.log('Success:', postFeed);
    } catch (error) {
        console.error('Error:', error);
    }
  }

  return (
    <div>
      <div className='w-1/2 m-auto flex flex-col gap-2 my-10'>
        <p className='text-[24px] font-[700] text-primary1'>
          Hi, {user.firstName}.
        </p>
        <div className='flex-center justify-between'>
          <p className='text-gray-500'>Find topics you'd like to read.</p>
          <div className='bg-defaultYellow text-white size-[40px] rounded-full flex flex-all-center'>
            <RiSearch2Line size={30} />
          </div>
        </div>

        <div className='flex gap-5 items-center'>
          <img src='./img.jpg' alt='' className='size-[50px] rounded-full ' />
          <input
            type='text'
            placeholder='What is new?'
            className='border w-full rounded-3xl p-3'
            value={feedContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFeedContent(e.target.value)
            }
          />
          <button className='p-3 rounded-full border' onClick={handleSubmit}>
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
        <GrayLine />
        <div className='flex-center gap-2 '>
          {filter?.map((f, i) => {
            return (
              <div
                key={i}
                className={`${
                  active == i
                    ? 'bg-secondaryBlue text-white'
                    : 'bg-transparent border text-gray-600'
                } py-2 px-5 cursor-pointer`}
                onClick={() => setActive(i)}>
                {f}
              </div>
            );
          })}
        </div>

        <div className='flex gap-5 flex-col my-5'>

        {feedIsLoading ? (
          <Loader />
        ) : feeds?.length > 0 ? (
          feeds?.map((item: any, i: number) => {


            return (
              <EachFeed key={i}/>
            );
          })
        ) : (
          <p>There are no feeds yet.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default page;

// "use client";

// import EachFeed from '@/components/Feeds/EachFeed';
// import GrayLine from '@/components/UI/GrayLine'
// import React, { useState, ChangeEvent, useEffect} from 'react'
// import { RiSearch2Line } from 'react-icons/ri'
// import { getUser } from '@/hooks/UserRequests'
// import { useCreateFeed } from '@/hooks/PostRequests';
// import { toastSuccess } from '@/utils/toast';

// const page: React.FC = () => {

//     const user = getUser();

//     if (!user) {
//       return null
//     }

//     // const [active,setActive] = useState<number>(0);
//     const [active,setActive] = useState(0);
//     const [feedContent,setFeedContent] = useState<string>('');
//     const [likes,setLikes] = useState<string[]>(['']);
//     const [image,setImage] = useState<string>('');

//     // const [content, setContent] = useState<string>('');
//     const { createFeedFn, isLoading , isError , error, isSuccess } = useCreateFeed();

//     const handleSubmit = async () => {
//         const postFeed = {
//             content : feedContent,
//             postedBy : user,
//             likes,
//             image
//         };

//         try {
//             createFeedFn(postFeed)
//             console.log('Success:', postFeed);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const filter = [
//         "Trending",
//         "Popular",
//         "Recommended",
//         "New Topic",
//         "Mentions"
//     ]

//     return (
//         <div>
//             <div className='w-1/2 m-auto flex flex-col gap-2 my-10'>
//                 <p className='text-[24px] font-[700] text-primary1'>Hi, {user.firstName}.</p>
//                 <div className='flex-center justify-between'>
//                     <p className='text-gray-500'>Find topics you'd like to read.</p>

//                     <div className='bg-defaultYellow text-white size-[40px] rounded-full flex flex-all-center'>
//                         <RiSearch2Line size={30}/>
//                     </div>
//                 </div>

//                 <div className='flex gap-5 items-center'>
//                     <img src="./img.jpg" alt="" className='size-[50px] rounded-full '/>
//                     <input type="text" placeholder="What is new?" className='border w-full rounded-3xl p-3' value={feedContent} onChange={(e: ChangeEvent<HTMLInputElement>) => setFeedContent(e.target.value)}/>
//                     <button className='p-3 rounded-full border' onClick={handleSubmit}>Add</button>
//                 </div>

//                 <GrayLine />

//                 <div className='flex-center gap-2 '>
//                     {
//                         filter?.map((f, i)=>{
//                             return(
//                                 <div key={i} className={`${active == i ? "bg-secondaryBlue text-white" : "bg-transparent border text-gray-600"} py-2 px-5 cursor-pointer`} onClick={()=> setActive(i)}>
//                                     {f}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 <div className='flex gap-5 flex-col my-5'>
//                     <EachFeed />
//                     <EachFeed />
//                     <EachFeed />
//                     <EachFeed />
//                     <EachFeed />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default page
