import React from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import Loader from '../Loader';
import { IoIosThermometer } from 'react-icons/io';
import TimeAgo from 'react-timeago'
import { usePostQuery} from '@/hooks/PostRequests';
import { useFetchUsers } from '@/hooks/UserRequests';


interface Props {
  thead: string[];
  data: any;
  isLoading?: boolean | null;
}


const UsersTable = () => {
  const { users , isError, isLoading} = useFetchUsers();

  return (
    <table className='text-[0.6rem] w-full'>
      <tr className='text-sm'>
        <th>
          <input type="checkbox" name="" id="" />
        </th>
        {['Username','Name','Email','Role','Posts'].map((head: string, i: number) => {
          return (
            <th className='text-xs' key={i}>
              {head}
            </th>
          );
        })}
      </tr>

      {isLoading ? (
        <Loader />
      ) : users?.length > 0 ? (
        users?.map((item: any, i: number) => {
          while (i < 50) {
            return (
              <tr className='text-left text-xs gap-1  items-start' key={i}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td className='text-[#197DDA] flex'>
                    <img src={item?.profilePicture} className='rounded-full w-12 h-12 mr-3' />
                  <div >
                    {item?.firstName}

                        <div className='mt-1.5 flex gap-2 '>
                        <span className='text-blue-600 border-r-2 pr-1'>Edit</span>
                        <span className='text-red-700 border-r-2 pr-1'>Delete</span>
                        <span className='text-blue-600 border-r-2 pr-1'>View</span>
                        <span className='text-blue-600'>View</span>
                    </div>
                  </div>

                  
                </td>
                <td>{item?.firstName + ' ' + item?.lastName}</td>
                <td>{item?.email}</td>
                <td>{item?.role}</td>
                <td>
                    56
                </td>
              </tr>
            );
          }
        })
      ) : (
        <p className='text-center py-5 text-sm font-semibold'>
          No Users Available
        </p>
      )}
      
    </table>
  )
};

export default UsersTable;