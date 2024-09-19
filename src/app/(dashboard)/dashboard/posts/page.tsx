"use client"
import { usePostQuery } from '@/hooks/PostRequests'
import PostsTable from '@/components/Tables/PostsTable'
import Link from 'next/link'
import React from 'react'
import { HiSearch, HiTrash } from 'react-icons/hi'
import { RiChat1Fill } from 'react-icons/ri'

const page = () => {
    // console.log(posts)

    return (
        <div className='flex flex-col gap-5 max-w-full overflow-hidden'>
            <div className='flex gap-10 flex-center max-md:justify-between'>
                <p className='font-[600]'>Posts</p>

                <Link href={"/dashboard/posts/new"} >
                    <button className='border border-secondaryBlue text-secondaryBlue p-2 text-xs'>
                        Add New Post
                    </button>
                </Link>
            </div>

            <div className="justify-between sm:flex sm:items-center">
                <div className='categories'>
                    <p>All <span>(108)</span></p>
                    <p>Mine <span>(14)</span></p>
                    <p>Published <span>(109)</span></p>
                </div>

                <div className='bg-white border flex max-md:my-2.5'>
                    <input type="text" className='bg-transparent focus:outline-none grow p-3 ' placeholder='Search' />
                    <div className='bg-primary1 p-3 text-white right-0'>
                        <HiSearch size={24} />
                    </div>
                </div>
            </div>

            <div className='post-select gap-2 grid grid-cols-3 md:gap-4 md:flex text-sm'>
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

            <div className="overflow-x-scroll">
                <PostsTable  />
            </div>
        </div>
    )
}

export default page