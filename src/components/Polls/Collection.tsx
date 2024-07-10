"use client"
import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import { useVotePoll } from '@/hooks/PostRequests'
import { getUser } from '@/hooks/UserRequests'
import { toastSuccess } from '@/utils/toast'


interface Props{
    polls: string[],
}

const Collection = ({polls}: Props) => {
    const [selected, setSelected] = useState<number | null >()

    const {votePollFn, error, isSuccess} = useVotePoll(); 
    const user = getUser()
    
    const handleVote = async ( pollId : any ,choiceId : any ) => {
        const votePoll = {
            pollId: pollId,
            choiceId: choiceId,
            userId: user?._id
        }

        try {
          votePollFn(votePoll);
          console.log('Success:', votePoll);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      useEffect(() => {
        if(isSuccess) {
            toastSuccess('Voted')
        }
      },[isSuccess])
  return (
    <div className='flex flex-col gap-3'>
        {
            polls?.map((item: string, i: number)=>{
                return(
                    <div onClick={() => setSelected(i)}>
                        <Bar title={item} value={0} key={i} mySelect={i == selected ? true : false} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Collection