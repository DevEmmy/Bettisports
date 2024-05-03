import React from 'react'
import { RiBookmarkLine, RiFacebookLine, RiHeart2Line, RiLinkedinLine, RiShareLine, RiTwitterLine } from 'react-icons/ri'

const Tag = () => {
    return (
        <div className='flex justify-between items-center text-sm border-y py-5'>
            <p>Tags: <span className='underline'>Mens Football, Saudi Arabia</span></p>
            <div className='flex share'>
                <div>
                    <p className='text-secondaryBlue'>Like</p>
                    <RiHeart2Line />
                </div>

                <div>
                    <p className='text-secondaryBlue'>Bookmark</p>
                    <RiBookmarkLine />
                </div>

                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-2 text-secondaryBlue'>
                        <RiShareLine />
                        <p>Share on:</p>
                    </div>

                    <div className='flex gap-2'>
                        <RiLinkedinLine />

                        <RiFacebookLine  />

                        <RiTwitterLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tag