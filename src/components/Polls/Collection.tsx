"use client"
import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import { useVotePoll } from '@/hooks/PostRequests'
import { getUser } from '@/hooks/UserRequests'
import { toastSuccess } from '@/utils/toast'


interface Props{
    choices: any,
    id: string,
    totalVotes: any
}

const Collection = ({choices, id, totalVotes}: Props) => {
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


      useEffect(() => {

      }, [])


      // const [votes,setVotes] = useState<number>(0);
  return (
    <div className='flex flex-col gap-3'>
        {
            choices?.map((item: any, i: number)=>{
              // item?.voters?.includes(user?._id) ? setSelected(i) : '';
                return(
                    <div onClick={() => {
                      handleVote(i);
                      }}>
                        <Bar title={item?.choiceText} value={(item?.votes/totalVotes) * 100} key={i} mySelect={ item?.voters?.includes(user?._id) ? true : i == selected ? true : false} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Collection