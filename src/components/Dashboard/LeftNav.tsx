"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { RiChat3Fill, RiHome2Fill, RiHome2Line, RiMenu2Line, RiPenNibFill, RiPenNibLine, RiPictureInPicture2Fill, RiUser3Fill } from 'react-icons/ri'

const LeftNav = () => {

    const navItems = [
        {
            title: "Dashboard",
            link: "/dashboard",
            icon: <RiHome2Fill />
        },
        {
            title: "Posts",
            link: "/posts",
            icon: <RiPenNibFill />,
            sub: [
                {
                    title: "All Posts",
                    link: "/all-posts"
                },
                {
                    title: "Add New Posts",
                    link: "/add-new-posts"
                },
                {
                    title: "Live Football",
                    link: "/live-football"
                },
                {
                    title: "Polls",
                    link: "/polls"
                },
                {
                    title: "Categories",
                    link: "/categories"
                },
            ]
        },
        {
            title: "Media",
            link: "/media",
            icon: <RiPictureInPicture2Fill />
        },
        {
            title: "Comments",
            link: "/comments",
            icon: <RiChat3Fill />
        },
        {
            title: "Users",
            link: "/user",
            icon: <RiUser3Fill />
        },

    ]

    const [showPosts, setShowPosts] = useState<boolean>(false)

    const [active, setActive] = useState<number>(0)
    return (
        <div className='w-1/5 fixed h-[100vh] top-0 left-0 bg-white border-r flex flex-col gap-20 py-5 px-10'>
            <div className='flex-center gap-5'>
                <RiMenu2Line />
                <img src="./logo.png" alt="" />
            </div>

            <div className="flex flex-col gap-2">
                {
                    navItems.map((item, i) => {
                        return (
                            <>
                                {
                                    item.sub ?
                                        <div className={`relative cursor-pointer p-4 flex justify-between ${active == i ? "bg-primary1 text-white" : "text-gray-500"}`} key={i}>
                                            <div className='flex-center gap-2' onClick={() => setShowPosts(!showPosts)}>
                                                <p className=' '>{item.icon}</p>
                                                <p>{item.title}</p>
                                            </div>

                                            <HiChevronDown onClick={() => setShowPosts(!showPosts)} />

                                            {
                                                showPosts &&
                                                <div className="absolute top-14 flex flex-col bg-white  shadow-xl w-full text-sm -left-2">
                                                    {
                                                        item.sub.map((s, i) => {
                                                            return (
                                                                <Link href={s.link} key={i} className='hover:bg-gray-200 p-4'>
                                                                    {s.title}
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                        :

                                        <Link href={item.link} className={`flex-center gap-2 cursor-pointer py-4 px-4 ${active == i ? "bg-primary1 text-white" : "text-gray-500"}`} key={i}>
                                            <p className=' '>{item.icon}</p>
                                            <p>{item.title}</p>
                                        </Link>
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeftNav