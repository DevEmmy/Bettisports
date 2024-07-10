"use client";
import React from 'react'
import PostedBy from './PostedBy'
import Articles from '../Articles'
import CommentForm from './CommentForm'
import Comments from './Comments'
import { RiBookmarkLine, RiFacebookLine, RiHeart2Line, RiLinkedinLine, RiShareLine, RiTwitterLine } from 'react-icons/ri'
import TitleHeader from '../UI/TitleHeader'
import Tag from './Tag'
import { useEachPostQuery } from '@/hooks/PostRequests'
import Loader from '../Loader';
import parser from "html-react-parser"


interface Props {
    id: string
}

const BlogContent = ({ id }: Props) => {
    console.log(id);
    const { post, isError, isLoading } = useEachPostQuery(id)
    

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <p className='text-[12px]'>Category</p>
            <TitleHeader title={post.title} />
            <PostedBy author={post.author} createdAt={post.createdAt} />

            {/* <div className='my-5 flex flex-col gap-5 text-[#25282B]'>
                <img src={post.media} alt="" />
                <p>The next chapter in Kylian Mbappe&apos;s transfer drama triangle alongside PSG and Real Madrid entered was written on Thursday when the French forward told the Paris based club he will be leaving as a free agent.</p>
                <p>
                    Transfer guru, Fabrizio Romano, revealed that Kylian Mbappé informed PSG that he will LEAVE the club in July, although all the terms of the departure are yet to be fully agreed and Kylian is still to fulfil his commitments to the club.
                </p>
                <p>
                    The announcement meant that the drama between Paris Saint-Germain and Mbappé is over. In the last three to four summer transfers, the 2018 World Cup winner has been heavily linked with Real Madrid.
                    However, last summer, the Los Blancos opted against paying a huge amount to buy him from PSG after he signed an extension instead of joining the La Liga club.
                </p>
                <p>
                    The question now is, will Mbappe still join Real Madrid or which other clubs are other possible destinations.
                </p>
            </div>

            <div className='my-10'>
                <p className='text-[36px] font-[700] text-[#25282B]'>Where is Kylian Mbappe going next?.</p>
                <p>Here are top seven destinations for Mbappe.</p>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='font-[600]'>1. Real Madrid</p>
                <p>
                    Real Madrid has always been a destination of choice for Mbappe, no other club troubled Mbappe&apos;s loyalty with PSG than the Los Blancos.
                </p>

                <p>
                    Therefore, it wasn&apos;t surprising that just hours after Mbappe announced his exit as a free agent, Real Madrid sent contract proposal to his camp.
                </p>

                <p>
                    The salary offered by Real Madrid is reportedly is way lower than the one they proposed to him back in summer 2022. The contract proposal is also lower compared to what Paris Saint-Germain offered for new deal at the club.
                </p>

                <p>
                    This may discourage a man who has won almost everything in football except the UEFA Champions League.
                </p>

                <p>
                    With the status, pedigree, and the exciting rebuild Real Madrid has been doing plus the history of the desperation on the side of Real and the player in the past, Santiago Bernabeu remains a “no-brainer” for the 25-year-old.
                </p>

                <img src="./mbape.png" alt="" className='w-1/3 m-auto h-auto object-contain' />


            </div>

            <div className='flex flex-col gap-5'>
                <p className='font-[600]'>2. Barcelona</p>
                <p>
                    We might have added Barcelona as a tongue-in-the-cheek choice because other than the big team status plus history, the Blaugrana do not exactly have the finances to afford Mbappe.
                </p>

                <p>
                    Interestingly, moving as a free agent makes Mbappe joining Barcelona as his next destination viable but they have to shake their wage bill and shed the squad to be able to add his potential hefty salary to a broke Barcelona.
                </p>

                <p>
                    However, even if Barcelona wins the UCL this season, Xavi&apos;s departure as the head coach and the quality of the squad to Real Madrid makes Barca an inferior choice but nevertheless, there&apos;s an outside chance.
                </p>

                <Tag />
            </div> */}

            <div className='my-5 flex flex-col gap-5 text-[#25282B]'>
                <img src={post.media} alt={post.title} />
                <div>
                    {parser(post.content)}
                </div>
            </div>

            <Comments postId={id}/>

            <CommentForm postId={id}/>
        </div>

    )
}

export default BlogContent