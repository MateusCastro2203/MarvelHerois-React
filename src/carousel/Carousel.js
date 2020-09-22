import React, {useState, useEffect} from 'react'
import Comics from '../Comics/Comics';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const CarouselComics = ({comics}) => {
    var value = comics.items;

    return (
        <Carousel>
            {
            value.map((value) => (
                <Carousel.Item>
                    <div className="movieRow--item"> 
                            <Comics url={value} className="comics"></Comics>
                    </div>
                </Carousel.Item>
                )
            )
            }
        </Carousel>
    )
}

export default CarouselComics
