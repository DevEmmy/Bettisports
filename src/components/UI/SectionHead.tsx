import React from 'react'

const SectionHead = ({
    title,
    otherStyles
} : any) => {
  return (
    <div className={`min-w-fit font-semibold !text-[17px] capitalize ${otherStyles}`}>
        {title}
    </div>
  )
}

export default SectionHead