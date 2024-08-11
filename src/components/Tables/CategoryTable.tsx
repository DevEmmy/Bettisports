import React from 'react';
// import { RiChat1Fill } from 'react-icons/ri';
import Loader from '../Loader';
import { Span } from 'next/dist/trace';
// import { IoIosThermometer } from 'react-icons/io';
// import TimeAgo from 'react-timeago'

interface Props {
  thead: string[];
  data: any;
}

const CategoryTable = ({ thead, data}: Props) => {
  return (


    <>
    <table>
      <tr className='text-sm'>
        {thead?.map((head: string, i: number) => {
          return (
            <th className='text-sm' key={i}>
              {head}
            </th>
          );
        })}
      </tr>

      { data?.map((item: any, i: number) => {

            return (
              <tr className='text-left gap-1 text-sm items-start' key={i}>
                <td className='text-[#197DDA]'>
                  <div>
                    {item?.title}
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
                <td>{item?.description}</td>
                <td>{item?.slug}</td>
                <td>{item?.parentCategory}</td>

              </tr>
            );
          }
    )}
      
    </table>
    </>
  )
}

export default CategoryTable;