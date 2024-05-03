import React from 'react'
import TitleHeader from '../UI/TitleHeader'
import PostedBy from '../Blog/PostedBy'
import GrayLine from '../UI/GrayLine'
import Clubs from '../Shared/Clubs'
import { HiChevronDoubleRight } from 'react-icons/hi2'
import Minuite from './Minuite'
import Comments from '../Blog/Comments'
import CommentForm from '../Blog/CommentForm'
import Tag from '../Blog/Tag'

const MainPage = () => {
    return (
        <div>
            <p className='text-[12px]'>Live Football</p>
            <TitleHeader title="MAN UTD 3 -3 COVENTRY... COVENTRY PULLS ONE BACK TO COMPLETE A DRAMATIC COMEBACK" />
            <PostedBy />
            <div className='my-5 flex flex-col gap-5 text-[#25282B]'>
                <img src="./img.jpg" alt="" />

                <GrayLine />

                <div className="flex justify-between py-5 border-b-2 border-b-secondaryBlue">
                    <p>78'</p>

                    <div className='flex items-center gap-2'>
                        <Clubs abb={"CHE"} full={true} size='20px' />

                        <p className='text-[18px] font-[700] '><span className='bracket-score'>(2)</span> 3 -  3 <span className='bracket-score'>(0)</span></p>

                        <Clubs abb={"SHE"} full={true} size='20px'/>
                    </div>

                    <p className='text-secondaryBlue underline flex gap-2 items-center'>
                        View details 
                        <HiChevronDoubleRight />
                    </p>
                </div>

                <div>
                    {
                        [1,2,3].map((item, i)=>{
                            return(
                                <Minuite key={i}/>
                            )
                        })
                    }
                </div>
                <Tag />

                <Comments />

                <CommentForm />
            </div>
        </div>
    )
}

export default MainPage