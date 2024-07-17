"use client"
import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import { useVotePoll , useFetchPolls  } from '@/hooks/PostRequests'
import { getUser } from '@/hooks/UserRequests'
import { toastSuccess, toastError } from '@/utils/toast'


interface Props{
    choices: any,
    id: string,
    totalVotes: any
}

const Collection = ({choices, id, totalVotes}: Props) => {
    const [selected, setSelected] = useState<number | null >()

    const [disabled,setDisabled] = useState(false)

    const voterExists = (choices : any , voterId : string) => {
        for (let choice of choices) {
          if (choice.voters.includes(voterId)) {
            return true;
          }
        }
      return false;
    };

    const {votePollFn, error, isSuccess} = useVotePoll();
    const { polls, isLoading, isError, refetch } = useFetchPolls();
    const user = getUser()
    
    const handleVote = async (choiceId: number) => {
      setDisabled(true);

      refetch();
        const votePoll = {
            pollId : id,
            choiceIndex : choiceId,
            userId: user?._id
        }
        voterExists(choices,user?._id) ? toastError('already voted') : setSelected(choiceId);
        
        try {
          voterExists(choices,user?._id) ? '' : votePollFn(votePoll);
          console.log('Success:', votePoll);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      useEffect(() => {
        if(isSuccess) {
            toastSuccess('Voted');
            refetch();
        }
      },[isSuccess]);

  return (
    <div className='flex flex-col gap-3'>
        {
            choices?.map((item: any, i: number)=>{
                return(
                    <div onClick={() => {
                      // setDisabled(true);
                      handleVote(i)
                      }}
                      className={`${disabled ? 'pointer-events-none' : ''}`}
                      >
                        <Bar title={item?.choiceText} value={(item?.votes/totalVotes) * 100} key={i} mySelect={ item?.voters?.includes(user?._id) ? true : i == selected ? true : false} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Collection