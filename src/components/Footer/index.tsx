import React from 'react'
import { FooterSubContent, Sublinks } from './interfaces'
import Link from 'next/link'
import { RiArrowRightLine, RiFacebookLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'
import Image from 'next/image'



const Footer = () => {
    const footerItems: FooterSubContent[] = [
        {
            title: "Products",
            items: [
                {
                    title: "Bettitude.com",
                    link: "/"
                },
                {
                    title: "Bettisports Blog",
                    link: "/"
                },
                {
                    title: "Probetpicks",
                    link: "/"
                },
                {
                    title: "Live.com",
                    link: "/"
                },
            ]
        },
        {
            title: "Company",
            items: [
                {
                    title: "About",
                    link: "/"
                },
                {
                    title: "Contact Us",
                    link: "/"
                },
                {
                    title: "Sponsorships and Ads",
                    link: "/"
                },
                {
                    title: "Partnership",
                    link: "/"
                },
            ]
        },
        {
            title: "Support",
            items: [
                {
                    title: "Give us a feedback",
                    link: "/"
                },
                {
                    title: "Help Center",
                    link: "/"
                }
            ]
        },
    ]

    return (
        <div className='mt-20 px-xPadding border-t border-t-gray-300 py-10'>
            <div className='grid grid-cols-[4fr_2fr] gap-10'>
                <div className='grid grid-cols-5 gap-10'>
                    {
                        footerItems.map((item: FooterSubContent, i: number) => {
                            return (
                                <div key={i} className='flex flex-col gap-3'>
                                    <p className=' font-[600]'>{item.title}</p>
                                    <div className='flex flex-col gap-3'>
                                        {
                                            item.items.map((sublink: Sublinks, j: number) => {
                                                return (
                                                    <Link href={sublink.link} key={j} className='text-[14px]'>
                                                        {sublink.title}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className='flex flex-col gap-3 col-span-2'>
                        <p className=' font-[600]'>General info and Technical Support:</p>
                        <p className='text-[14px]'>For general information about BETTITUDE and any issues regarding support. Write to us at: hello@bettitude.com</p>
                    </div>
                </div>

                <div className='bg-primary1 p-8 flex flex-col gap-3'>
                    <p className='text-white font-[600]'>Subscribe</p>
                    <div className='flex w-full'>
                        <input type="text" placeholder='Email Address' className='w-full p-2 bg-white' />
                        <button className='bg-defaultYellow text-white rounded-r-md p-3'>
                            <RiArrowRightLine />
                        </button>
                    </div>

                    <p className='text-white text-[12px]'>Subscribe and stay up-to-date with our weekly forecasts, posts, news and all access to our predictions</p>
                </div>
            </div>

            <p className='text-sm text-center my-8'>All inquiry and Information about BettitudeKeepUp blog and press-related issues or more. Write to us at: keepup@bettitude.com</p>

            <div className='flex items-center justify-between pt-10 border-t border-t-gray-300'>
                <Image src="/./logo.png" unoptimized width={0} className='object-contain h-auto w-[200px]' height={0} alt='' />

                <div className="flex">
                    Copyrights &copy; 2017-{new Date().getFullYear()} <span className='font-[600]'>Bettitude</span> | Bettitude Inc. All rights reserved.
                </div>

                <div className="flex items-center gap-3">
                    <p>Follow Us</p>
                    <div className='icons'>
                        <div>
                            <RiLinkedinLine />
                        </div>

                        <div>
                            <RiFacebookLine />
                        </div>

                        <div>
                            <RiTwitterLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer