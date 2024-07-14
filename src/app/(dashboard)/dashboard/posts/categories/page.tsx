'use client';
import OverviewContainer from '@/components/Shared/OverviewContainer'
import Table from '@/components/Tables'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { HiCog, HiSearch, HiTrash } from 'react-icons/hi'
import { RiCalendar2Fill, RiGalleryLine, RiKeyLine, RiMicLine, RiPinDistanceLine, RiVideoLine } from 'react-icons/ri'
import { useCreateCategory } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';

const page = () => {

    const [title,setTitle] = useState<string>('');
    const [slug,setSlug] = useState<string>('');
    const [description,setDescription] = useState<string>('');

    const {createCategoryFn, error, isError, isLoading, isSuccess} = useCreateCategory()

    const handleSubmit = async () => {
        const catData = {
            title,slug,description, parentCategory : "Root"
        
        };

        try {
            createCategoryFn(catData)
            console.log('Success:', catData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if(isSuccess) {
            toastSuccess(`${title} category added`);
        }
    },[isSuccess])


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
            <p className='text-[20px] font-[600]'>Categories</p>

            <div className="flex-center justify-between">
                <div />

                <div className='bg-white border flex'>
                    <input type="text" className='bg-transparent focus:outline-none p-3 ' placeholder='Search Categories...' />
                    <div className='bg-primary1 p-3 text-white'>
                        <HiSearch size={24} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-10">
                <div className='flex flex-col gap-5'>
                    <p className='text-[20px]'>Add New Category</p>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" className='p-3 border bg-white focus:outline-none'
                            value={title}  onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                         />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Slug</label>
                        <input type="text" className='p-3 border bg-white focus:outline-none' 
                            value={slug}  onChange={(e: ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)}
                        />
                    </div>

                    <p className='text-[#52575C] text-sm'>
                        The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                    </p>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Parent Category</label>

                        <select name="" id="" className='p-3 border bg-white focus:outline-none'>
                            <option value="--Parent Category--">--Parent Category--</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Description</label>

                        <textarea name="" id="" className='p-3 border bg-white focus:outline-none h-[100px] resize-none'
                            value={description}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <button className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit' onClick={handleSubmit}>
                        {isLoading ? `Adding ${title} category...` : 'Add New Category'}
                    </button>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className="flex-center justify-between text-sm">
                        <div className='post-select gap-4 flex'>
                            <select name="" id="">
                                <option value="">All Dates</option>
                            </select>

                            <select name="" id="">
                                <option value="">All Categories</option>
                            </select>

                            <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4'>
                                Filter
                            </button>

                            <button className='border border-red-600 text-red-600 flex gap-2 px-5 items-center p-2 '>
                                <HiTrash />
                                Delete
                            </button>

                        </div>

                        <p>28 Items</p>
                    </div>

                    {/* <Table 
                        thead={["Name", "Description", "Slug", "Count"]}
                        data={[
                            {
                                "name": "International",
                                description: "-",
                                slug: "intl",
                                count: 1
                            },
                            {
                                "name": "International",
                                description: "-",
                                slug: "intl",
                                count: 1
                            },
                            {
                                "name": "International",
                                description: "-",
                                slug: "intl",
                                count: 1
                            },
                            {
                                "name": "International",
                                description: "-",
                                slug: "intl",
                                count: 1
                            }
                        ]}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default page