"use client"
import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import { useVotePoll } from '@/hooks/PostRequests'
import { getUser } from '@/hooks/UserRequests'
import { toastSuccess } from '@/utils/toast'


interface Props{
    polls: string[],
    id: string,
    votes: any
}

const Collection = ({polls, id, votes}: Props) => {
    const [selected, setSelected] = useState<number | null >()

    const {votePollFn, error, isSuccess} = useVotePoll(); 
    const user = getUser()
    
    const handleVote = async (choiceId: number) => {
        const votePoll = {
            pollId : id,
            choiceIndex : choiceId,
            userId: user?._id
        }
        setSelected(choiceId);
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
      },[isSuccess]);


      // const [votes,setVotes] = useState<number>(0);
  return (
    <div className='flex flex-col gap-3'>
        {
            polls?.map((item: string, i: number)=>{
              
                return(
                    <div onClick={() => {
                      handleVote(i);
                      }}>
                        <Bar title={item} value={votes} key={i} mySelect={i == selected ? true : false} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Collection