import React from 'react';
import EditorsPick from './EditorsPick';
import MajorHighlight from './MajorHighlight';
import CategoricalNews from './CategoricalNews';

const HeroHighlight = () => {
  return (
    <div className='md:grid md:grid-cols-[1fr_3fr_1.5fr] md:px-xPadding px-5  my-5 md:my-10 md:gap-5 '>
      <div className='mb-3.5 md:hidden'>
        <MajorHighlight />
      </div>
      <div className='my-3.5'>
        <EditorsPick />
      </div>
      <div className='max-md:hidden'>
        <MajorHighlight />
      </div>
      <div className='my-3.5'>
        <CategoricalNews />
      </div>
    </div>
  );
};

export default HeroHighlight;
