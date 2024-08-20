import OverviewContainer from '@/components/Shared/OverviewContainer'
import React from 'react'
import { HiCog, HiTrash } from 'react-icons/hi'
import { RiCalendar2Fill, RiGalleryLine, RiKeyLine, RiMicLine, RiPinDistanceLine, RiVideoLine } from 'react-icons/ri'

const page = () => {
    const gender = [
        'Men', "Women"
    ]

    const categories = [
        "Featured", "News", "Transfers", "Articles", "Matchdays", "Interviews", "Fantasy", "Betting"
    ]

    const format = [
        {
            text: "Standard",
            icon: <RiPinDistanceLine />
        },
        {
            text: "Gallery",
            icon: <RiGalleryLine />
        },
        {
            text: "Video",
            icon: <RiVideoLine />
        },
        {
            text: "Podcast",
            icon: <RiMicLine />
        }
    ]
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-[20px] font-[600]'>Add New Post</p>

            <div className="md:grid grid-cols-[3fr_1fr] gap-5">
                <div className='flex flex-col gap-2'>
                    <input type="text" placeholder='Add title' className='border p-3 w-full' />
                    <div className='flex-center gap-10 justify-between'>
                        <p>Permalink: <span className='text-secondaryBlue'>https://et.gg.com//</span></p>
                        <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4 text-sm'>
                            Edit
                        </button>
                    </div>

                    <div className='flex-center justify-between '>
                        <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit '>
                            <HiCog />
                            Add Media
                        </button>

                        <button className='border border-red-600 bg-red-100 text-red-600 flex gap-2 px-5 items-center p-2 w-fit '>
                            <HiTrash />
                            Delete
                        </button>
                    </div>

                    <div>
                        
                    </div>

                    <OverviewContainer title={"Excerpt"}>
                        <div className='flex gap-2 flex-col'>
                            <textarea name="" className='h-[100px] p-3 focus:outline-none resize-none border' id=""></textarea>

                            <p>Excerpts are optional hand-crafted summaries of your content that can be used in your theme.</p>
                        </div>
                    </OverviewContainer>

                    <OverviewContainer title={"Author"}>
                        <div className='flex gap-2 flex-col'>
                            <select name="" id="" className='w-fit p-3 bg-white border focus:outline'>
                                <option value="">Idowu Williams</option>
                            </select>
                        </div>
                    </OverviewContainer>
                </div>

                <div className='flex flex-col gap-10'>
                    <OverviewContainer title={"Publish"} buttonText={"Publish"}>
                        <div className='flex flex-col gap-3'>
                            <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit'>

                                Save Draft
                            </button>

                            <p className='flex gap-2 items-center'>
                                <RiKeyLine />
                                Status: <span className='font-[600]'>Draft</span> <span className='text-secondaryBlue underline'>Edit</span>
                            </p>

                            <p className='flex gap-2 items-center'>
                                <RiCalendar2Fill />
                                Publish: <span className='font-[600]'>Immediately</span> <span className='text-secondaryBlue underline'>Edit</span>
                            </p>
                        </div>
                    </OverviewContainer>

                    <OverviewContainer title={"Tags"}>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <input type="text" className='border border-gray-500 focus:outline-none px-3' />
                                <button className='border border-secondaryBlue text-secondaryBlue p-2 text-sm'>
                                    Add
                                </button>
                            </div>

                            <p>separate tags with commas</p>
                            <p className='underline text-secondaryBlue'>Choose from most used tags</p>
                        </div>
                    </OverviewContainer>

                    <OverviewContainer title={"Featured Image"}>
                        <div>
                            <p className='underline text-secondaryBlue'>Set Featured Image</p>
                        </div>
                    </OverviewContainer>
                </div>
            </div>
        </div>
    )
}

export default page