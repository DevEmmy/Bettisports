'use client';
import Table from '@/components/Tables/PostsTable'
import UsersTable from '@/components/Tables/UsersTable'
import React from 'react'
import { HiSearch, HiTrash } from 'react-icons/hi'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 flex-center max-md:justify-between'>
                <p className=' font-[600] '>Users</p>

                <button className='border border-secondaryBlue text-secondaryBlue p-2 text-xs'>
                    Add New User
                </button>
            </div>

            <div className="md:flex-center justify-between">
                <div className='categories'>
                    <p>All <span>(108)</span></p>
                    <p>Administrator <span>(14)</span></p>
                    <p>Author <span>(109)</span></p>
                </div>

                <div className='bg-white border flex max-md:my-3'>
                    <input type="text" className='bg-transparent focus:outline-none p-3 text-xs grow' placeholder='Search for User'/>
                    <div className='bg-primary1 p-3 text-white '>
                        <HiSearch size={24}/>
                    </div>
                </div>
            </div>

            <div className='post-select gap-4 flex'>
                <select name="" id="">
                    <option value="">Change Role to...</option>
                </select>

                <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4'>
                    Change
                </button>

                <button className='border border-red-600 text-red-600 flex gap-2 px-5 items-center p-2 '>
                    <HiTrash />
                    Delete
                </button>
            </div>

            {/* <Table thead={["Username", "Name", "Email", "Role", "Posts"]} 
            data={[
                {
                    "username": "Webmaster",
                    name: "Williams Idowu",
                    email: "willy@gmail.com",
                    role: "Administrator",
                    posts: "3"
                },
                {
                    "username": "Webmaster",
                    name: "Williams Idowu",
                    email: "willy@gmail.com",
                    role: "Administrator",
                    posts: "3"
                },
                {
                    "username": "Webmaster",
                    name: "Williams Idowu",
                    email: "willy@gmail.com",
                    role: "Administrator",
                    posts: "3"
                },
                {
                    "username": "Webmaster",
                    name: "Williams Idowu",
                    email: "willy@gmail.com",
                    role: "Administrator",
                    posts: "3"
                },
               
            ]} /> */}

            <div className='overflow-x-auto'>
            <UsersTable />
            </div>
        </div>
    )
}

export default page