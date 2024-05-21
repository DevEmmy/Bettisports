import OverviewContainer from '@/components/Shared/OverviewContainer'
import React from 'react'
import { HiCog, HiSearch, HiTrash } from 'react-icons/hi'
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
            <p className='text-[20px] font-[600]'>Polls</p>

            <div className="flex-center justify-between">
                <div />

                <div className='bg-white border flex'>
                    <input type="text" className='bg-transparent focus:outline-none p-3 ' placeholder='Search Polls...' />
                    <div className='bg-primary1 p-3 text-white'>
                        <HiSearch size={24} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-10">
                <div className='flex flex-col gap-5'>
                    <p className='text-[20px]'>Add New Poll</p>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Ask Question</label>
                        <input type="text" placeholder='Question' className='p-3 border bg-white focus:outline-none' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Choice</label>
                        <input type="text" className='p-3 border bg-white focus:outline-none' />
                        <input type="text" className='p-3 border bg-white focus:outline-none' />
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Poll Length</label>

                        <div className="grid grid-cols-3 gap-5">
                            <select name="" id="" className='p-3 border bg-white focus:outline-none'>
                                <option value="">Day</option>
                            </select>

                            <select name="" id="" className='p-3 border bg-white focus:outline-none'>
                                <option value="">Hours</option>
                            </select>

                            <select name="" id="" className='p-3 border bg-white focus:outline-none'>
                                <option value="">Minutes</option>
                            </select>
                        </div>
                    </div>

                    <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit '>
                        <HiCog />
                        Add Media
                    </button>


                    <button className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit '>

                        Add New Poll
                    </button>
                </div>

                <div>
                    <div className="flex-center justify-between">
                        <div className='post-select gap-4 flex'>
                            <select name="" id="">
                                <option value="">All Dates</option>
                            </select>

                            <button className='border border-red-600 text-red-600 flex gap-2 px-5 items-center p-2 '>
                                <HiTrash />
                                Delete
                            </button>

                        </div>

                        <p>28 Items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page