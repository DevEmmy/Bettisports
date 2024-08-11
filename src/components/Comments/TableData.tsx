import Link from 'next/link'
import React from 'react'
import { RiChat2Fill } from 'react-icons/ri'
import DateFormatter from '../UI/DateFormatter'

interface Props {
    item: any
}

const TableData = ({ item} : any) => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <img src={item?.author?.profilePicture ? item?.author?.profilePicture : './img'} alt="" className='size-[40px]' />
                    <div className='!text-xs'>
                        <p className='!text-xs'>{item?.author.firstName} {' '} {item?.author.lastName}</p>
                        <p className='text-secondaryBlue text-xs'>
                            {item?.author.email}
                        </p>
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
                <p className='text-xs text-gray-600'>
                    {item?.comment}
                </p>
                <div className='flex gap-4 !text-[10px] comment-action'>
                    <p className='text-green-600'>Approve</p>
                    <p className='text-secondaryBlue'>Reply</p>
                    <p className='text-secondaryBlue'>Edit</p>
                    <p className='text-red-600'>Spam</p>
                    <p className='text-red-600'>Trash</p>
                </div>
            </div>

            <div className=''>
                <p className='text-xs text-secondaryBlue'>{item?.inResponse?.title}</p>
                <Link href={`/blog/${item?._id}`} className='text-xs text-secondaryBlue'>view post</Link>
                <RiChat2Fill />
            </div>

            <div>
                <p className='text-xs'>
                    <DateFormatter dateAdded={item?.updatedAt} />
                </p>
            </div>
        </div>
    )
}

export default TableData