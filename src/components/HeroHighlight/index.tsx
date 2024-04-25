import React from 'react'
import EditorsPick from './EditorsPick'
import MajorHighlight from './MajorHighlight'
import CategoricalNews from './CategoricalNews'

const HeroHighlight = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr_1.5fr] px-xPadding my-10 gap-5'>
        <EditorsPick />
        <MajorHighlight />
        <CategoricalNews />
    </div>
  )
}

export default HeroHighlight