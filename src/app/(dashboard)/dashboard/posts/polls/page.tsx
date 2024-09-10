'use client';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { HiCog, HiSearch, HiTrash } from 'react-icons/hi';
import {
  RiCalendar2Fill,
  RiGalleryLine,
  RiKeyLine,
  RiMicLine,
  RiPinDistanceLine,
  RiVideoLine,
} from 'react-icons/ri';
import { toastSuccess, toastError } from '@/utils/toast';
import { useCreatePoll, useFetchPolls } from '@/hooks/PostRequests';
import PollTable from '@/components/Tables/PollTable';

interface duration {
  days: number;
  hours: number;
  minutes: number;
}

const page = () => {
  const { createPollFn, isLoading, isError, error, isSuccess } = useCreatePoll();
  const { polls, refetch} = useFetchPolls();

  const [question, setQuestion] = useState<string>('');
  const [choices, setChoices] = useState(['', '']);
  const [pollDuration, setPollDuration] = useState<duration>({
    days: 0,
    hours: 0,
    minutes: 0,
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

  const Days: Number[] = Array(3)
    .fill(0)
    .map((_, i) => i);
  const Hours = Array(25)
    .fill(0)
    .map((_, i) => i);
  const Minutes: Number[] = Array(60)
    .fill(0)
    .map((_, i) => i);

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
      createPollFn(newPoll);
      console.log('Success:', newPoll);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toastSuccess('Poll Uploaded');
    }
  }, [isSuccess]);

  return (
    <div className='md:flex flex-col gap-5'>

      <div className='flex-center justify-between'>
        <div className=''>
          <p className='text-[20px] font-[600]'>Polls</p>
        </div>

        <div className='bg-white border flex max-md:w-full my-3'>
          <input
            type='text'
            className='bg-transparent focus:outline-none p-3 max-md:grow'
            placeholder='Search Polls...'
          />
          <div className='bg-primary1 p-3 text-white'>
            <HiSearch size={24} />
          </div>
        </div>
      </div>

      <div className=' md:grid grid-cols-[1fr_2fr] gap-10 my-3'>
        <div className='flex flex-col gap-5'>
          <p className='text-[20px]'>Add New Poll</p>

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
                  <option className='' key={i}>
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
                onChange={handleSelectChange}>
                {Hours?.map((item) => (
                  <option className='' value={item} key={item}>
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
                  <option className='' key={item}>
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
              {isLoading ? 'Adding a Poll...' : 'Add New Poll'}
            </button>
          </div>
        </div>

        <div className='max-sm:mt-20 max-md:mt-14'>
          <div className='flex-center justify-between'>
            <div className='post-select gap-4 flex'>
              <select name='' id=''>
                <option value=''>All Dates</option>
              </select>

              <button className='border border-red-600 text-red-600 flex gap-2 px-5 items-center p-2 '>
                <HiTrash />
                Delete
              </button>
            </div>

            <p>{polls?.length} Items</p>
          </div>

          <div className='my-3 overflow-x-auto'>
            <PollTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
