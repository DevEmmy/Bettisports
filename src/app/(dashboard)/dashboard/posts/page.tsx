"use client"
import { usePostQuery } from '@/app/hooks/PostRequests'
import Table from '@/components/Tables'
import Link from 'next/link'
import React from 'react'
import { HiSearch, HiTrash } from 'react-icons/hi'
import { RiChat1Fill } from 'react-icons/ri'

const page = () => {
    const { posts, isError, isLoading } = usePostQuery();
    console.log(posts)

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 flex-center'>
                <p className=' font-[600] '>Posts</p>

                <Link href={"/dashboard/posts/new"} >
                    <button className='border border-secondaryBlue text-secondaryBlue p-2 text-xs'>
                        Add New Post
                    </button>
                </Link>
            </div>

            <div className="flex-center justify-between">
                <div className='categories'>
                    <p>All <span>(108)</span></p>
                    <p>Mine <span>(14)</span></p>
                    <p>Published <span>(109)</span></p>
                </div>

                <div className='bg-white border flex'>
                    <input type="text" className='bg-transparent focus:outline-none p-3 ' placeholder='Search' />
                    <div className='bg-primary1 p-3 text-white'>
                        <HiSearch size={24} />
                    </div>
                </div>
            </div>

            <div className='post-select gap-4 flex text-sm'>
                <select name="" id="">
                    <option value="">All Dates</option>
                </select>

                <select name="" id="">
                    <option value="">All Categories</option>
                </select>

                <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4'>
                    Filter
                </button>

                <button className='border border-red-600 text-red-600 flex gap-2 px-5 items-center p-2 '>
                    <HiTrash />
                    Delete
                </button>

            </div>

            <Table thead={["Title", "Author", "Categories", "Tags", "Comment", "Date"]}
                data={posts} isLoading={isLoading} />
        </div>
    )
}

export default page