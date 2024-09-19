"use client"
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiSearch2Line, RiTwitterXFill } from 'react-icons/ri'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'
import CategoricalNews from '../HeroHighlight/CategoricalNews'
import Loader from '../Loader'
import { useFetchPopular,usePostQuery } from '@/hooks/PostRequests'


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

    const { popular, isError, isLoading } = useFetchPopular();
    const { posts, isLoading: isLoad } = usePostQuery();
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex gap-2 items-center border rounded-3xl p-3'>
            <RiSearch2Line />
            <input type="search" name="" className='bg-transparent focus:outline-none' id="" />
        </div>

        <div className='bg-[#F6F8FB] p-5'>
            <p className='text-center border-b-2 border-gray-600 p-3 font-[500]'>Must Read</p>
            
            {
                isLoading ? 
                <Loader/>
                :
                popular.length > 0 ?
                popular.slice(0,4)?.map((item: any, i: number) => {
                    return (
                        <SmFootballBlogHighlight item={item} key={i} />
                    )
                }) :
                (
                    <p>There are no must-read posts</p>
                )
            }
        </div>

        <img src="./ads.png" alt="" className='bg-primary1'/>

        <div className='bg-[#F6F8FB] p-5'>
            <p className='text-center border-b-2 border-gray-600 p-3 font-[500]'>Recently Published Post</p>
            {
                isLoad ?
                <Loader />
                :
                 posts.length > 0 ?
                 posts.slice(0,4)?.map((item: any, i: number) => {
                     return (
                         <SmFootballBlogHighlight item={item} key={i} />
                     )
                 }) :
                 (
                    <p>There are no new posts</p>
                 )
            }
        </div>

        {/* <div>
            <p className='text-[20px] font-[600]'>Follow us on Social Media</p>
            <div className="flex gap-3">
                <RiFacebookCircleFill size={30} />
                <RiTwitterXFill size={30}/>
                <RiInstagramFill size={30}/>
            </div>
        </div> */}

        <img src="./ads2.png" alt="" />

        <CategoricalNews />
    </div>
  )
}

export default OtherSections