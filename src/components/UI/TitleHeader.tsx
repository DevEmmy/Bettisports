import React from 'react'

interface Props{
    title: string;
}

const TitleHeader = ({title}: Props) => {
  return (
    <p className='text-[26px] md:text-[50px] font-[700] text-primary1 my-3 leading-7 md:leading-normal'>{title}</p>
  )
}

export default TitleHeader