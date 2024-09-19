'use client';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { HiCog, HiSearch, HiTrash, HiX } from 'react-icons/hi';
import {
  RiCalendar2Fill,
  RiGalleryLine,
  RiKeyLine,
  RiMicLine,
  RiPinDistanceLine,
  RiVideoLine,
} from 'react-icons/ri';
import { toastSuccess, toastError } from '@/utils/toast';
import { useFetchPolls , useUpdatePollQuery, useDeletePollQuery } from '@/hooks/PostRequests';
import Link from 'next/link';

interface duration {
  days: number;
  hours: number;
  minutes: number;
}
interface PollProps {
  poll: {
    _id: string;
    question: string;
    format: string;
    choices: Choice[];
    duration: number;
    author: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface Choice {
  choiceText: string;
  votes: number;
  voters: string[];
}
const EditPolls = ({ poll }: PollProps) => {
  const [showEdit, setShow] = useState(false);
  const { updatePollFn, isLoading, error, isSuccess } = useUpdatePollQuery(poll?._id);
  const { deletePollFn, deleteSuccess} = useDeletePollQuery(poll?._id);
  const { refetch} = useFetchPolls();
  
  const hours = Math.floor(poll?.duration / 60);
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  const remainingMinutes = poll?.duration % 60;
  const [question, setQuestion] = useState<string>(poll?.question);
  const [choices, setChoices] = useState<string[]>(poll?.choices.map((choice) => choice.choiceText));
  const [pollDuration, setPollDuration] = useState<duration>({
    days: days,
    hours: hours,
    minutes: remainingMinutes,
  });

  const gender = ['Men', 'Women'];

  const categories = [
    'Featured',
    'News',
    'Transfers',
    'Articles',
    'Matchdays',
    'Interviews',
    'Fantasy',
    'Betting',
  ];

  const format = [
    {
      text: 'Standard',
      icon: <RiPinDistanceLine />,
    },
    {
      text: 'Gallery',
      icon: <RiGalleryLine />,
    },
    {
      text: 'Video',
      icon: <RiVideoLine />,
    },
    {
      text: 'Podcast',
      icon: <RiMicLine />,
    },
  ];

  const Days: Number[] = Array(3).fill(0).map((_, i) => i);
  const Hours = Array(25).fill(0).map((_, i) => i);
  const Minutes: Number[] = Array(60).fill(0).map((_, i) => i);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPollDuration((prevOptions) => ({
      ...prevOptions,
      [name]: parseInt(value),
    }));
  };

  const handleChoiceChange = (i: number, item: string) => {
    const newChoices = [...choices];
    newChoices[i] = item;
    setChoices(newChoices);
  };

  const handleSubmit = async () => {
    const newPoll = {
      question,
      format: 'string',
      choices: choices?.map((choice) => ({
        choiceText: choice,
        votes: 0,
        voters: [],
      })),
      duration:
        pollDuration.days * 24 * 60 +
        pollDuration.hours * 60 +
        pollDuration.minutes,
      author: 'string',
    };
    try {
      console.log(newPoll.duration);
      updatePollFn(newPoll);
      console.log('Success:', newPoll);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      deletePollFn();
      console.log('success')
    } catch (error) {
      console.log('Delete Error');
    }
  };

  useEffect(() => {
    refetch();
    if (isSuccess) {
      refetch();
      toastSuccess('Poll Updated');
    }
    if (deleteSuccess) {
      refetch();
      toastSuccess('Poll Deleted')
    }
  }, [isSuccess, deleteSuccess]);
  return (
    <div>
      <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span
          className='text-red-700 border-x-2 px-2 cursor-pointer'
          onClick={handleDelete}>
          Trash
        </span>
        <Link
          href={`/polls`}
          className='text-blue-600 cursor-pointer'>
          View
        </Link>
      </div>
      {showEdit && (
        <div className='grid place-items-center justify-between'>
          <div className='black__overlay' onClick={() => setShow(false)} />

          <div className='fixed z-[1000] md:w-2/3  left-0 right-0 top-0 bottom-0 m-auto h-fit mx6 bg-white p-10 setings  md:gap-5'>
          <button
              onClick={() => setShow(false)}
              className='top-0 absolute right-0 text-gray-500 p-3'>
              <HiX className='cursor-pointer' size={20} />
            </button>
            <div className='flex flex-col gap-5'>
              <p className='text-[20px]'>Edit Poll</p>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Ask Question</label>
                <input
                  type='text'
                  placeholder='Question'
                  className='p-3 border bg-white focus:outline-none'
                  value={question}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setQuestion(e.target.value)
                  }
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Choice</label>
                {/* <input type="text" className='p-3 border bg-white focus:outline-none' />
                        <input type="text" className='p-3 border bg-white focus:outline-none' /> */}
                <div className='flex justify-between max-md:items-center items-end'>
                  <div className='grow'>
                    {choices.map((item, i: number) => (
                      <input
                        key={i}
                        type='text'
                        className='p-3 border bg-white focus:outline-none'
                        value={item}
                        placeholder={`choice ${i + 1}`}
                        onChange={(e) => handleChoiceChange(i, e.target.value)}
                      />
                    ))}
                  </div>
                  <div className='flex-row'>
                    <button
                      className='w-6 h-6 border border-blue-700 rounded-full'
                      onClick={(e) => setChoices([...choices, ''])}>
                      +
                    </button>
                    <button
                      className='w-6 h-6 mt-2 rounded-full border-blue-700 border'
                      onClick={(e) => {
                        choices?.length > 2
                          ? setChoices(choices.slice(0, -1))
                          : toastError('Cannot have less than two choices!!');
                      }}>
                      -
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Poll Length</label>

                <div className='grid grid-cols-3 max-md:gap-2.5 gap-5'>
                  <select
                    name='days'
                    className='p-3 border bg-white focus:outline-none'
                    onChange={handleSelectChange}>
                    {Days?.map((item: any, i: number) => (
                      <option className='' key={i} selected={item == days ? true : false}>
                        {item == 0
                          ? 'Days'
                          : item == 1
                          ? `${item} day`
                          : `${item} days`}
                      </option>
                    ))}
                  </select>

                  <select
                    name='hours'
                    className='p-3 border bg-white focus:outline-none'
                    onChange={handleSelectChange}
                    >
                    {Hours?.map((item) => (
                      <option className='' value={item} key={item} selected={item == remainingHours ? true : false}>
                        {item == 0
                          ? 'Hours'
                          : item == 1
                          ? `${item} hr`
                          : `${item} hrs`}
                      </option>
                    ))}
                  </select>

                  <select
                    name='minutes'
                    className='p-3 border bg-white focus:outline-none'
                    onChange={handleSelectChange}>
                    {Minutes?.map((item: any) => (
                      <option className='' key={item} selected={item == remainingMinutes ? true : false}>
                        {item == 0
                          ? 'Minutes'
                          : item == 1
                          ? `${item} mins`
                          : `${item} mins`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='max-md:flex max-md:justify-between'>
                <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit '>
                  <HiCog />
                  Add Media
                </button>

                <button
                  className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit '
                  onClick={handleSubmit}>
                  {isLoading ? 'Updating Poll...' : 'Update Poll'}
                </button>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default EditPolls;
