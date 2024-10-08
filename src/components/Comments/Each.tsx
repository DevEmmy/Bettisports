import React from 'react'

const Each = () => {
  return (
    <div className='flex gap-2 items-start py-5 px-2 overflow-auto'>
        <img src="./img.jpg" alt="" className='size-[70px]'/>

        <div className='flex flex-col gap-2 text-xs'>
            <p className='text-xs'>From <span className='text-secondaryBlue'>Ade Williams</span> on <span className='text-secondaryBlue'>Where Will Kylian Mbappe Go Next? 7 Clubs That are in the Race.</span> <span className='text-gray-600'>[ Pending ]</span></p>
            <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni. Esse saepe amet facilis soluta vero.</p>
            <div className='flex gap-1.5 sm:gap-2.5 md:gap-4 !text-[10px] comment-action'>
                <p className='text-green-600'>Approve</p>
                <p className='text-secondaryBlue'>Reply</p>
                <p className='text-secondaryBlue'>Edit</p>
                <p className='text-red-600'>Spam</p>
                <p className='text-red-600'>Trash</p>
            </div>
        </div>
        
    </div>
  )
}

export default Each