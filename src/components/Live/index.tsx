import React from 'react'
import Line from '../UI/Line'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'

const Live = () => {
    return (
        <div className='md:grid md:grid-cols-[4fr_1.5fr] px-5 md:px-xPadding my-10 gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-[600]'>Live</h1>
                <Line />

                <div className='relative h-96 md:max-h-fit'>
                    <img src="./img.jpg" alt="" className='h-fit' />
                    <div className="overlay" />
                    <div className="details ">
                        <div className='text-[18px] md:text-[28px] p-5 font-[600]'>
                            AFCON&apos; 24: FRANK KESSIE&apos;S LAST MINUTE PENALTY SEND IVORY COAST TO EXTRA TIME
                        </div>

                        <div className='bg-primary1 w-full p-5 grid grid-cols-2 md:grid-cols-4 gap-3 items-center justify-between'>
                            {
                                [1,2,3,4].map((item: any, i: number)=>{
                                    return(
                                        <div className='text-white' key={i}>
                                            <p className='text-[10px] md:text-[12px] text-defaultYellow uppercase mb-1'>Follow Live</p>
                                            <p className='text-[18px] md:text-[24px] font-[600] border-b border-white'>ARS 0 - 0 MCI</p>
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

            <div className='flex flex-col gap-5 mt-7 md:mt-0'>
                <h1 className='font-[600] uppercase'>Live on Bettisport happening now</h1>
                <Line />

                <div>
                    {/* {
                        [1, 2, 3, 4, 5].map((item: any, i: number) => {
                            return (
                                <SmFootballBlogHighlight key={i} item={item} />
                            )
                        })
                    } */}
                    There are no Live currently
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