import React from 'react'
import OverviewContainer from '../Shared/OverviewContainer'
import { RiBarChart2Fill } from 'react-icons/ri'
import Published from '../Shared/Published'
import Each from '../Comments/Each'

const Main = () => {
    const data = [
        {
            title: "Total Impression",
            value: 0
        },
        {
            title: "Total Clicks",
            value: 0
        },
        {
            title: "Total Keywords",
            value: 0
        },
        {
            title: "Average Position",
            value: 0
        },
    ]
    return (
        <div>
            <p>Dashboard</p>

            <div className="grid grid-cols-2 gap-10 mt-5">
                <OverviewContainer title="Overview">
                    <div>
                        <div className='flex-center justify-between text-sm'>
                            <div className='flex-center gap-5'>
                                <p>Analytics</p>
                                <p className='text-[12px] text-gray-500'>Last 30 days</p>
                            </div>

                            <RiBarChart2Fill />
                        </div>

                        <div className="grid grid-cols-2 mt-5">
                            {
                                data.map((item, i) => {
                                    return (
                                        <div className='p-4 border text-sm'>
                                            <p>{item.title}</p>
                                            <p>{item.value}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </OverviewContainer>

                <OverviewContainer title="Quick Draft">
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="title">Title</label>
                            <input type="text" className='p-3 border focus:outline-none' />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="content">Content</label>
                            <textarea name="content" placeholder="What's on your mind?" className='p-3 border focus:outline-none resize-none'></textarea>
                        </div>

                        <button className='bg-secondaryBlue text-white p-3 w-fit'>Save Draft</button>
                    </div>
                </OverviewContainer>

                <OverviewContainer title="Activity">
                    <div className='flex flex-col gap-3'>
                        <p>Recently Published</p>

                        <div className='flex flex-col gap-3'>
                            {
                                [1, 2, 3, 4, 5, 6].map((item, i) => {
                                    return (
                                        <div className='odd:bg-blue-50'>
                                            <Published dateTime='Feb 17th, 11:56am' key={i} title='Where will Kylan Mbappe Go Next? 7 clubs that are in the race' />
                                        </div>
                                    )
                                })
                            }

                            <div className="comments-container bg-[#FAFAF1] ">
                                <Each />
                                <Each />
                                <Each />
                            </div>
                        </div>
                    </div>


                </OverviewContainer>
            </div>
        </div>
    )
}

export default Main