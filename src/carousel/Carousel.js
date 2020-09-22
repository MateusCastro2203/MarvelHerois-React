import React, {useState, useEffect} from 'react'
import Comics from '../Comics/Comics';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import NavigateBeforeIcon  from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const CarouselComics = ({comics}) => {
    var value = comics.items;
    console.log(value);

    const [scrollX, setScrollX] = useState(0);
    
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = value.length * 5;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 10;
        }
        setScrollX(x);
    }
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
