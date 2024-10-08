import React from 'react'

interface Props {
  title: String;
  children: React.ReactNode,
  buttonText?: String | null
}

const OverviewContainer = ({ title, children, buttonText }: Props) => {
  return (
    <div className='bg-white border text-sm my-4 sm:my-2.5 md:my-0'>
      <p className='p-4 border-b font-[600] '>{title}</p>

      <div className='p-4'>
        {children}
      </div>

      {
        buttonText &&
        <div className='p-4 border-t'>
          <button className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit '>

            {buttonText}
          </button>
        </div>
      }
    </div>
  )
}

export default OverviewContainer