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
        <div className='my-10 mx-xPadding'>
            <div className="flex items-center justify-between pb-5 border-b-4 border-b-secondaryBlue">
                <p>{title} FOOTBALL</p>

                <div className='flex gap-5'>
                    {
                        filter.map((item: any, i: number) => {
                            return (
                                <p className='text-[14px]'>{item.title}</p>
                            )
                        })
                    }
                </div>
            </div>

            <Highlight />
            <News />
        </div>
    )
}

export default FootballNews