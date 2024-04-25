import Link from 'next/link'
import React from 'react'
import { RiMenu2Fill, RiSearch2Line, RiUser2Fill } from "react-icons/ri"
import Button from '../Button'

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
  return (
    <div className='flex items-center justify-around px-xPadding border-b-gray-400 border-b py-5'>
        {
            nav.map((item: any, i: number)=>{
                return(
                    <Link href={item.link} key={i} className='text-[12px]'>
                        <p>{item.title}</p>
                    </Link>
                )
            })
        }

        {/* <div className='flex'> */}
            <RiSearch2Line />     

            <button className='px-5 bg-primary1 py-1 text-white flex items-center gap-3'>
                Login
                <RiUser2Fill />
            </button>       

            <RiMenu2Fill />
        {/* </div> */}
    </div>
  )
}

export default MainNav