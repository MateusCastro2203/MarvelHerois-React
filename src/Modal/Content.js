import React from 'react'
import CarouselComics from '../carousel/Carousel';
import '../Modal/Content.css'

const Content = ({heroi}) => {
    console.log(heroi);
    return (
        <div className="body">
            <div className="heroiImg" >
                <img className='photo' src={heroi.thumbnail.path+"."+heroi.thumbnail.extension} alt=""/>
            </div>
            <div className="descricao">
                <h1 className='name'>{heroi.name}</h1>
                <div className="description">
                    <h2 className='titleDescriprion'>Description:</h2>{heroi.description === "" ? "No description registered" : heroi.description }
                </div>
                <div>
                    <h2 className='titleDescriprion'>Comics: </h2>
                    <CarouselComics comics={heroi.comics}></CarouselComics>
                </div>
            </div>
        </div>
    )
}

export default Content
