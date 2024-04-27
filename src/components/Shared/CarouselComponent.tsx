import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = ({ children }: any) => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            centerMode={false}
            className='items-start justify-start h-full'
        >
            {children}
        </Carousel>
    )
}

export default CarouselComponent