"use client"
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiSearch2Line, RiTwitterXFill } from 'react-icons/ri'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'

const OtherSections = () => {
    const [active, setActive] = useState(0)
    const filter = [
        {
            title: "Trending"
        },
        {
            title: "Recents"
        },
        {
            title: "Popular"
        }
    ]

  return (
    <div className='flex flex-col gap-3 p-3'>
        <div className='flex gap-2 items-center border rounded-3xl p-3'>
            <RiSearch2Line />
            <input type="search" name="" className='bg-transparent focus:outline-none' id="" />
        </div>

        <div className='bg-[#F6F8FB] p-5'>
            <p className='text-center border-b-2 border-gray-600 p-3 font-[500]'>Must Read</p>
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
        </div>

        <img src="./ads.png" alt="" />

        <div className='bg-[#F6F8FB] p-5'>
            <p className='text-center border-b-2 border-gray-600 p-3 font-[500]'>Recently Published Post</p>
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
        </div>

        <div>
            <p className='text-[20px] font-[600]'>Follow us on Social Media</p>
            <div className="flex gap-3">
                <RiFacebookCircleFill size={30} />
                <RiTwitterXFill size={30}/>
                <RiInstagramFill size={30}/>
            </div>
        </div>

        <img src="./ads2.png" alt="" />
    </div>
  )
}

export default OtherSections