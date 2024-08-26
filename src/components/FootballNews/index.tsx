import React from 'react'
import Highlight from './Highlight'
import News from './News'

const FootballNews = ({title}: any) => {
    const filter = [
        {
            title: "All",
            link: "/"
        },
        {
            title: "NEWS",
            link: "/"
        },
        {
            title: "TRANSFER & GOSSIPS",
            link: "/"
        },
        {
            title: "MATCHDAY ANALYSIS",
            link: "/"
        },
        {
            title: "INTERVIEWS",
            link: "/"
        },
        {
            title: "ARTICLES",
            link: "/"
        },
        {
            title: "FANTASIES",
            link: "/"
        },
        {
            title: "BETTING",
            link: "/"
        },

    ]
    return (
        <div className='my-10 px-4 md:px-xPadding'>
            <div className="flex items-center justify-between pb-5 border-b-4 border-b-secondaryBlue">
                <p>{title} FOOTBALL</p>

                <div className='overflow-x-auto hidden md:flex gap-5'>
                    {
                        filter?.map((item: any, i: number) => {
                            return (
                                <p className='text-[14px]' key={i}>{item?.title}</p>
                            )
                        })
                    }
                </div>

                <select name='' className='px-2 py-3 md:hidden'>
                {
                        filter?.map((item: any, i: number) => {
                            return (
                                <option className='text-[9px]' key={i}>{item?.title}</option>
                            )
                        })
                    }
                </select>
            </div>

            <Highlight />
            <News />
        </div>
    )
}

export default FootballNews