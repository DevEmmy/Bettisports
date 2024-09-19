import React from 'react'
import TimeAgo from 'react-timeago'

const EachNotification = ({item} : any) => {
  return (
    <div className='grid grid-cols-[1fr_5fr_1fr] md:grid-cols-[0.5fr_5fr_1.5fr] items-center py-5 gap-1.5 md:gap-5'>
        <img src="./img.jpg" alt="" className='size-[2rem] md:size-[50px] rounded-full' />

        <div className='flex flex-col gap-2'>
            <p className='text-[16px] font-[500]'>
              {/* John Doe Replied to your Comment */}
              {item?.title}
            </p>

            <div className='text-gray-500 border border-gray-500 text-sm w-full p-3'>
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint assumenda corporis labore ratione illo libero, cumque culpa ab optio magnam. */}
                {item.message}
            </div>  
        </div>

        <div className='w-full text-center text-gray-700 text-xs'>
            <p className='text-xs md:text-sm '>
              <TimeAgo date={item?.createdAt} />
            </p>
            <p className='text-[12px]'>20min</p>
        </div>
    </div>
  )
}

export default EachNotification