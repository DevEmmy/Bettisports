import React from 'react'

interface Props{
    title: string;
}

const TitleHeader = ({title}: Props) => {
  return (
    <p className='text-[50px] font-[700] text-primary1 leading-normal'>{title}</p>
  )
}

export default TitleHeader