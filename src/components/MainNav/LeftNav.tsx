import Link from 'next/link'
import React from 'react'
import { HiX } from 'react-icons/hi'
import { RiArticleLine, RiBarChart2Line, RiBellLine, RiChat3Line, RiDownload2Line, RiFilter2Line, RiGroupLine, RiHeadphoneLine, RiHeart2Line, RiInformationLine, RiSave2Line, RiVideoLine } from 'react-icons/ri'

const LeftNav = ({setOpen}: any) => {
    const leftNav = [
        {
            title: "Article",
            link: "/article",
            icon: <RiArticleLine />
        },
        {
            title: "Podcasts",
            link : "/podcasts",
            icon: <RiHeadphoneLine />
        },
        {
            title: "Livescores",
            link: "/live-scores",
            icon: <RiVideoLine />
        },
        {
            title: "Forums",
            link: "/forums",
            icon: <RiGroupLine />
        },
        {
            title: "Polls",
            link: "/polls",
            icon: <RiBarChart2Line  />
        },
        {
            title: 'Liked Posts',
            link: "/liked-posts",
            icon: <RiHeart2Line />
        },
        {
            title: "Saved Posts",
            link: "/saved-posts",
            icon: <RiSave2Line />
        },
        {
            title: "Comments",
            link: "/comments",
            icon: <RiChat3Line />
        },
        {
            title: "Notifications",
            link: "/notifications",
            icon: <RiBellLine />
        },
        {
            title: "Preferences",
            link: "/preferences",
            icon: <RiFilter2Line />
        },
        {
            title: "Help",
            link: "/",
            icon: <RiInformationLine />
        }
    ]

  return (
    <>
    <div className="black__overlay" onClick={()=> setOpen(false)}/>
        <div className='w-1/5 fixed top-0 right-0 bg-white z-[999] text-sm h-[100vh] flex flex-col gap-5 p-5'>
        <div className='border-b flex items-center justify-between border-gray-300 text-gray-500 py-2'>
            <p>Welcome</p>

            <HiX className='cursor-pointer' onClick={()=> setOpen(false)}/>
        </div>

        <div className='border-b border-gray-300  text-gray-500 py-2'>
            <p>Just For You</p>
        </div>

        {
            leftNav.map((item, i)=>{
                return(
                    <Link href={item.link} key={i} className='text-gray-80000 flex gap-3 items-center'>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default LeftNav