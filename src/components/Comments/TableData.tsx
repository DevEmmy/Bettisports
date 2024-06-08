import React from 'react'
import { RiChat2Fill } from 'react-icons/ri'

const TableData = () => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <img src="./img.png" alt="" className='size-[40px]' />
                    <div className='!text-xs'>
                        <p className='!text-xs'>Adetola Williams</p>
                        <p className='text-secondaryBlue text-xs'>willy@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-2 !text-[8px] comment-action'>
                    <p>Edit</p>
                    <p>Quick Edit</p>
                    <p>Trash</p>
                    <p>View</p>
                </div>
            </div>

            <div className='col-span-2'>
                <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni. Esse saepe amet facilis soluta vero.</p>
                <div className='flex gap-4 !text-[10px] comment-action'>
                    <p className='text-green-600'>Approve</p>
                    <p className='text-secondaryBlue'>Reply</p>
                    <p className='text-secondaryBlue'>Edit</p>
                    <p className='text-red-600'>Spam</p>
                    <p className='text-red-600'>Trash</p>
                </div>
            </div>

            <div className=''>
                <p className='text-xs text-secondaryBlue'>Where will Kylan Mbappe Go Next? 7 clubs that are in the Race.</p>
                <p className='text-xs text-secondaryBlue'>view post</p>
                <RiChat2Fill />
            </div>

            <div>
                <p className='text-xs'>2024/01/29 at 10:24 pm</p>
            </div>
        </div>
    )
}

export default TableData