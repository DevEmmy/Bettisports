import React from 'react'
import Line from '../UI/Line'
import { RiArrowRightLine } from 'react-icons/ri'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'

const InFocus = () => {
    const competition = [
        {
            title: "AFCON"
        },
        {
            title: "EURO 2024"
        },
        {
            title: "2024 World Cup"
        },
        {
            title: "COPA AMERICA"
        },
        {
            title: "ASIAN CUP"
        },
        {
            title: "FIFA WOMEN WORLD CUP"
        },
        {
            title: "OLYMPICS"
        },
        {
            title: "UEFA CONFERENCE LEAGUE"
        }
    ]
    return (
        <div className='px-xPadding my-10'>
            <div className='grid grid-cols-[4fr_1.5fr]  gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-[600]'>In Focus</h1>
                    <Line />

                    <div className="flex flex-col gap-5 relative">
                        <img src="./img.jpg" alt="" />
                        <div className="overlay"></div>
                        <div className="details p-10">
                            <p>March 24, 2023</p>
                            <p className='text-[28px] font-[600]'>
                                Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links
                            </p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='font-[600] uppercase'>Top Competition News</h1>
                    <Line />

                    <div className='flex flex-col divide-y'>
                        {
                            competition.map((comp: any, i: number) => {
                                return (
                                    <div className='flex items-center justify-between py-5'>
                                        <p>{comp.title}</p>
                                        <RiArrowRightLine />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex gap-5 my-5">
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            </div>
        </div>

    )
}

export default InFocus