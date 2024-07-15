"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { RiArticleLine, RiMenu2Fill, RiSearch2Line, RiUser2Fill } from "react-icons/ri"
import Button from '../Button'
import LeftNav from './LeftNav'
import { getUser } from '@/hooks/UserRequests'

const MainNav = () => {

    const nav = [
        {
            title: "HOME",
            link: "/"
        },
        {
            title: "LIVE",
            link: "/live"
        },
        {
            title: "INTERNATIONAL",
            link: "/international"
        },
        {
            title: "REGIONS",
            link: "/regions"
        },
        {
            title: "NEWS",
            link: "/news"
        },
        {
            title: "ARTICLE",
            link: "/article"
        },
        {
            title: "MATCHDAYS",
            link: "/match-days"
        },
        {
            title: "INTERVIEWS",
            link: "/interviews"
        },
        {
            title: "TRANSFERS",
            link: "/transfers"
        },
        {
            title: "FANTASY",
            link: "/fantasy"
        },
        {
            title: "SUBSCRIBE",
            link: "/subscribe"
        }
    ]

    const [open, setOpen] = useState(false)
    const user = getUser()
    return (
        <div className='flex items-center justify-around px-xPadding border-b-gray-400 border-b py-5'>
            {
                nav.map((item: any, i: number) => {
                    return (
                        <Link href={item?.link} key={i} className='text-[12px]'>
                            <p>{item?.title}</p>
                        </Link>
                    )
                })
            }

            {/* <div className='flex'> */}
            <RiSearch2Line />

            {
                user
                    ?
                    <Link href={"/profile"} className='px-5 bg-primary1 py-1 text-white flex items-center gap-3'>
                        Profile
                        <RiUser2Fill />
                    </Link>
                    :

                    <Link href={"/sign-in"} className='px-5 bg-primary1 py-1 text-white flex items-center gap-3'>
                        Login
                        <RiUser2Fill />
                    </Link>
            }

            <RiMenu2Fill onClick={() => setOpen(true)} className='cursor-pointer' />
            {/* </div> */}

            {open && <LeftNav setOpen={setOpen} />}
        </div>
    )
}

export default MainNav