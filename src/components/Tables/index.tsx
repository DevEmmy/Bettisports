import React from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import Loader from '../Loader';
import { IoIosThermometer } from 'react-icons/io';
import TimeAgo from 'react-timeago'

interface Props {
  thead: string[];
  data: any;
  isLoading?: boolean | null;
}

const Table = ({ thead, data, isLoading }: Props) => {
  return (
    <table>
      <tr className='text-sm'>
        {thead.map((head: string, i: number) => {
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
      ) : data.length > 0 ? (
        data.map((item: any, i: number) => {
          while (i < 50) {
            return (
              <tr className='text-left gap-1 text-sm items-start' key={i}>
                <td className='text-[#197DDA]'>
                  <div >
                    {item.title > 120
                      ? `${item.title.slice(0, 119)}...`
                      : item.title}
                    {item.publish ? '' : <span className='text-black'>- Draft</span>}
                  </div>

                  <div className='mt-1.5 flex gap-2 text-xs'>
                    <span className='text-blue-600'>Edit</span>
                    <span className='text-blue-600 border-x-2 px-2'>
                      Quick Edit
                    </span>
                    <span className='text-red-700 border-r-2 pr-2'>Trash</span>
                    <span className='text-blue-600'>View</span>
                  </div>
                </td>
                <td>{item.author.firstName + " " + item.author.firstName}</td>
                <td>{item.category}</td>
                <td>
                  {item.tags > 0 ? (
                    item.tags
                  ) : (
                    // <hr className=' border-2 w-5'/>
                    <img src='/hr.svg' className='w-5 h-5 object-contain' />
                  )}
                </td>
                <td>{item.reads}</td>
                <td>
                  {' '}
                  published <br />
                  <TimeAgo date={item.createdAt || "july 3, 2024"} />
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
      {/* </div> */}
    </table>
  );
};

export default Table;
