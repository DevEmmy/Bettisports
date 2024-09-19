import Link from 'next/link'
import React from 'react'
import { RiChat2Fill } from 'react-icons/ri'
import DateFormatter from '../UI/DateFormatter'
import TimeAgo from 'react-timeago'

interface Props {
    item: any
}

const TableData = ({ item} : any) => {
    return (
        <tr>
            <td className='flex flex-col gap-2'>
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
                    <p className='text-blue-600'>Edit</p>
                    <p className='text-green-600'>Quick Edit</p>
                    <p className='text-red-600'>Trash</p>
                    <p className=''>View</p>
                </div>
            </td>

            <td>
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
            </td>

            <td className='flex'>
                <p className='text-xs text-secondaryBlue'>{item?.inResponse?.title.slice(0,100)}..</p>
                <Link href={`/blog/${item?._id}`} className='text-xs text-secondaryBlue'>view post</Link>
                <RiChat2Fill />
            </td>

            <td>
                <p className='text-xs flex'>
                    <TimeAgo date={item?.createdAt} />
                </p>
            </td>
        </tr>
    )
}

export default TableData