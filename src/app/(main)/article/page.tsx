import EachBlog from '@/components/Blog/EachBlog'
import CategoricalNews from '@/components/HeroHighlight/CategoricalNews'
import React from 'react'

const page = () => {
    return (
        <div className='my-10'>
            <p className='mx-xPadding my-5 text-[24px] font-[600]'>Category: Article</p>

            <div className='grid grid-cols-[2fr_1fr] mx-xPadding gap-10'>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((item, i) => {
                            return (
                                <EachBlog key={i} />
                            )
                        })
                    }
                </div>

                <CategoricalNews />
            </div>
        </div>
    )
}

export default page