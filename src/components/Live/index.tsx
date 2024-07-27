import React from 'react'
import Line from '../UI/Line'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'

const Live = () => {
    return (
        <div className='grid grid-cols-[4fr_1.5fr] px-xPadding my-10 gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-[600]'>Live</h1>
                <Line />

                <div className='relative'>
                    <img src="./img.jpg" alt="" />
                    <div className="overlay" />
                    <div className="details ">
                        <p className='text-[28px] p-5 font-[600]'>
                            AFCON&apos; 24: FRANK KESSIE&apos;S LAST MINUTE PENALTY SEND IVORY COAST TO EXTRA TIME
                        </p>

                        <div className='bg-primary1 w-full p-5 flex items-center justify-between'>
                            {
                                [1,2,3,4].map((item: any, i: number)=>{
                                    return(
                                        <div className='text-white' key={i}>
                                            <p className='text-[12px] text-defaultYellow uppercase'>Follow Live</p>
                                            <p className='text-[24px] font-[600] border-b border-white'>ARS 0 - 0 MCI</p>
                                            <div className="flex text-[10px] justify-between items-center my-2">
                                                <p>EPL</p>
                                                <p className='bg-defaultYellow px-2 py-[1px] rounded-3xl font-[600]'>28:28</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-[600] uppercase'>Live on Bettisport happening now</h1>
                <Line />

                <div>
                    {
                        [1, 2, 3, 4, 5].map((item: any, i: number) => {
                            return (
                                <SmFootballBlogHighlight key={i} />
                            )
                        })
                    }
                </div>

                <div>
                    <p className='text-[20px] font-[600]'>Follow us on Social Media</p>
                    <div className="flex gap-3">
                        <RiFacebookCircleFill size={30} />
                        <RiTwitterXFill size={30} />
                        <RiInstagramFill size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live