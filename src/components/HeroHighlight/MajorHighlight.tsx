import React from 'react'

const MajorHighlight = () => {
    return (
        <div className='mt-16'>
            <div className='w-full h-full relative'>
                <img src={"./img.jpg"} alt="" className='w-full h-full object-cover' />

                <div className="overlay" />

                <div className="details p-10">
                    <p className='text-[10px]'>March 28, 2024</p>
                    <p className='font-[800] text-[36px] line-clamp-2'>
                    Two Premier League Clubs Linked With Outgoing Barcelona’s Manager
                    </p>
                </div>

            </div>
        </div>
    )
}

export default MajorHighlight