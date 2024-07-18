import React from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import Loader from '../Loader';
import { IoIosThermometer } from 'react-icons/io';
import TimeAgo from 'react-timeago'
import { useFetchPolls } from '@/hooks/PostRequests';

interface Props {
  thead: string[];
  data: any;
  isLoading?: boolean | null;
}

const PollTable = () => {
  const { polls, isError, isLoading , refetch} = useFetchPolls();
  return (
    <table>
      <tr className='text-sm'>
        <th>
          <input type="checkbox" name="" id="" />
        </th>
        {['Questions','Format','Duration','Date'].map((head: string, i: number) => {
          return (
            <th className='text-sm'>
              {head != 'Comment' ? (
                head
              ) : (
                <img
                  src='/commentIcon.svg'
                  className='w-5 h-5 object-contain'
                />
              )}
            </th>
          );
        })}
      </tr>

      {isLoading ? (
        <Loader />
      ) : polls?.length > 0 ? (
        polls?.map((item: any, i: number) => {
          while (i < 50) {
            return (
              <tr className='text-left gap-1 text-sm items-start' key={i}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td className='text-[#197DDA]'>
                  <div >
                    {item?.question > 120
                      ? `${item?.question.slice(0, 119)}...`
                      : item?.question}
                  </div>

                  <div className='mt-1.5 flex gap-2 text-xs'>
                    <span className='text-blue-600'>Edit</span>
                    <span className='text-red-700 border-r-2 pr-2'>Trash</span>
                    <span className='text-blue-600'>View</span>
                  </div>
                </td>
                <td>{item?.format}</td>
                <td>{item?.duration}</td>
                <td>
                  {' '}
                  published <br />
                  <TimeAgo date={item?.createdAt} />
                </td>
              </tr>
            );
          }
        })
      ) : (
        <p className='text-center py-5 text-sm font-semibold'>
          No Posts Available
        </p>
      )}
      
    </table>
  )
};

export default PollTable;