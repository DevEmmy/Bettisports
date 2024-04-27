import React from 'react'

const Featured = () => {
    return (
        <div>
            <div className='flex justify-between pb-5 border-b-4 border-b-secondaryBlue'>
                <p>Featured</p>

                <div className='flex gap-10'>
                    <p>ALL</p>
                    <p>MEN</p>
                    <p>WOMEN</p>
                </div>
            </div>

            <div className='grid grid-cols-[2fr_3fr_2fr] mt-10 gap-5'>
                <div className='grid gap-5'>
                    <img src="./ads.png" alt="" />

                    <div className='flex gap-3 flex-col'>
                        <img src="./img.jpg" alt="" />
                        <div>
                            <p className='text-[16px] line-clamp-2'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                            <p className='text-[14px] text-grayColor'>March 23, 2024</p>
                        </div>
                    </div>
                </div>


                <div className='flex gap-3 flex-col'>
                    <img src="./img2.png" alt="" />
                    <div>
                        <p className='text-[16px] line-clamp-2'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                        <p className='text-[14px] text-grayColor'>March 23, 2024</p>
                    </div>
                </div>


                <div className='grid gap-5'>
                    <div className='flex gap-3 flex-col'>
                        <img src="./img.jpg" alt="" />
                        <div>
                            <p className='text-[16px] line-clamp-2'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                            <p className='text-[14px] text-grayColor'>March 23, 2024</p>
                        </div>
                    </div>

                    <div className='flex gap-3 flex-col'>
                        <img src="./img.jpg" alt="" />
                        <div>
                            <p className='text-[16px] line-clamp-2'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                            <p className='text-[14px] text-grayColor'>March 23, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured