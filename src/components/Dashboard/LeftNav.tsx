"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { RiChat3Fill, RiHome2Fill, RiHome2Line, RiMenu2Line, RiPenNibFill, RiPenNibLine, RiPictureInPicture2Fill, RiUser3Fill } from 'react-icons/ri'

const LeftNav = () => {
    const [subToShow, setSubToShow] = useState<any>()
    const navItems = [
        {
            title: "Dashboard",
            link: "/dashboard/",
            icon: <RiHome2Fill />
        },
        {
            title: "Posts",
            link: "/dashboard/posts",
            icon: <RiPenNibFill />,
            sub: [
                {
                    title: "All Posts",
                    link: "/dashboard/posts"
                },
                {
                    title: "Add New Posts",
                    link: "/dashboard/posts/new"
                },
                {
                    title: "Live Football",
                    link: "/dashboard/posts/live-football"
                },
                {
                    title: "Polls",
                    link: "/dashboard/posts/polls"
                },
                {
                    title: "Categories",
                    link: "/dashboard/posts/categories"
                },
            ]
        },
        {
            title: "Media",
            link: "/dashboard/media",
            icon: <RiPictureInPicture2Fill />
        },
        {
            title: "Comments",
            link: "/dashboard/comments",
            icon: <RiChat3Fill />
        },
        {
            title: "Users",
            link: "/dashboard/users",
            icon: <RiUser3Fill />,
            sub: [
                {
                    title: "All Users",
                    link: "/dashboard/users"
                },
                {
                    title: "Add New User",
                    link: "/dashboard/users/new"
                },
                {
                    title: "Profile",
                    link: "/dashboard/users/profile"
                }
            ]
        },

    ]

    const [showPosts, setShowPosts] = useState<number>(0)

    const toggleDropDown = (sub: any)=>{
        if(subToShow){
            setSubToShow(null)
        }
        else{
            setSubToShow(sub)
        }
    }

    const [active, setActive] = useState<number>(0)
    return (
        <div className='w-1/5 fixed h-[100vh] top-0 left-0 bg-white border-r flex flex-col gap-20 py-5 px-5'>
            <div className='flex-center gap-5'>
                <RiMenu2Line />
                <Image src="/./logo.svg" width={0} height={0} alt="" className='size-fit' unoptimized />
            </div>

            <div className="flex flex-col gap-2">
                {
                    navItems.map((item, i) => {
                        return (
                            <>
                                {
                                    item?.sub ?
                                        <div className={`relative cursor-pointer p-3 flex justify-between  text-sm ${active == i ? "bg-primary1 text-white" : "text-gray-500"}`} key={i} onClick={()=> setActive(i)}>
                                            <div className='flex-center gap-2' >
                                                <p className=' '>{item?.icon}</p>
                                                <p>{item?.title}</p>
                                            </div>

                                            <HiChevronDown onClick={() =>{setShowPosts(i); toggleDropDown(navItems[i].sub)}} />

                                            {
                                                subToShow && i === showPosts &&
                                                <div className="absolute top-14 flex flex-col bg-white  shadow-xl w-full text-xs -left-2 z-50">
                                                    {
                                                        subToShow?.map((s: any, i: string) => {
                                                            return (
                                                                <Link href={s.link} onClick={()=> setSubToShow(null)} key={i} className='hover:bg-gray-200 p-4 text-gray-500'>
                                                                    {s.title}
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                        :

                                        <Link onClick={()=> setActive(i)} href={item?.link} className={`flex-center gap-2 cursor-pointer py-4 px-4 ${active == i ? "bg-primary1 text-white" : "text-gray-500"}`} key={i}>
                                            <p className=' '>{item?.icon}</p>
                                            <p>{item?.title}</p>
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