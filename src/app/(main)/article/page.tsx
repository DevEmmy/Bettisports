import EachBlog from '@/components/Blog/EachBlog'
import CategoricalNews from '@/components/HeroHighlight/CategoricalNews'
import React from 'react'

const page = () => {
    return (
        <div className='my-10'>
            <p className='px-5 md:px-xPadding my-5 text-[24px] font-[600]'>Category: Article</p>

            <div className='md:grid md:grid-cols-[2fr_1fr] px-5 md:px-xPadding gap-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
                    {
                        [1, 2, 3, 4, 5, 6, 7]?.map((item, i) => {
                            return (
                                // <EachBlog key={i} />
                                <div key={i} className='bg-primary1'>Each</div>
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