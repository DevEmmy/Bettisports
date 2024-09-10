import Link from 'next/link'
import React from 'react'
import { RiChat2Fill } from 'react-icons/ri'
import DateFormatter from '../UI/DateFormatter'
import TimeAgo from 'react-timeago'
import EditComments from '../Edit/EditComments'

interface Props {
    item: any
}

const TableData = ({ item} : any) => {
    return (
        <tr>
            <td>
                <input type='checkbox' />
            </td>
            <td className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <img src={item?.author?.profilePicture ? item?.author?.profilePicture : './img'} alt="" className='border rounded-full size-[50px]' />
                    <div className='!text-xs'>
                        <p className='!text-xs'>{item?.author.firstName} {' '} {item?.author.lastName}</p>
                        <p className='text-secondaryBlue text-xs'>
                            {item?.author.email}
                        </p>
                    </div>
                </div>
                <EditComments commentData={item} />
            </td>

            <td>
                <p className='text-xs text-gray-600'>
                    {item?.comment}
                </p>
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