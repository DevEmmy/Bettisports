"use client"
import React from 'react';
import CarouselComponent from '../Shared/CarouselComponent';

const MajorHighlight = () => {
    return (
        <div className='mt-16'>
            <CarouselComponent>
                {
                    [1, 2, 3, 4].map((item: any, i: number) => {
                        return (
                            <div className='w-full h-[600px] relative' key={i}>
                                <img src={"./img.jpg"} alt="" className='w-full h-full object-cover' />

                                <div className="overlay" />

                                <div className="details p-10 text-start">
                                    <p className='text-[10px]'>March 28, 2024</p>
                                    <p className='font-[800] text-[36px] line-clamp-2 leading-10'>
                                        Two Premier League Clubs Linked With Outgoing Barcelona&apos;s Manager
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </CarouselComponent>

        </div>
    )
}

export default MajorHighlight