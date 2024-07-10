import React from 'react'
import { RiShareForwardLine, RiThumbUpLine } from 'react-icons/ri'

const EachComment = (item: any) => {
  return (
    <div className='flex gap-3 border p-4 '>
        <img src="./img.jpg" alt="" className='size-[50px] rounded-full'/>
        <div className='flex gap-5 flex-col'>
            <div className="flex gap-2 items-center">
                <p className='font-[600]'>John Doe</p>
                <p className='text-sm text-gray-700'>March 24, 2023 at 4:14am</p>
            </div>

            <p className='text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, et? Totam earum, veniam adipisci velit sit repellat quibusdam dolorum sint laborum sunt id nulla? Cum dicta animi hic atque possimus.
            </p>

            <div className="actions flex items-center justify-between">
                <div>
                    <RiShareForwardLine />
                    <p>Share</p>
                </div>

                <div>
                    <RiThumbUpLine />
                    <p>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EachComment