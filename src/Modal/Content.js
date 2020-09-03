import React from 'react'
import '../Modal/Content.css'

const Content = ({heroi}) => {
    console.log(heroi);
    return (
        <div>
            <h1 id='name'>{heroi.name}</h1>
            <div className="container">
                <img id='photo' src={heroi.thumbnail.path+"."+heroi.thumbnail.extension} alt=""/>
                <p id='description'><h2 id='titleDescriprion'>Description:</h2>{heroi.description}</p>
            </div>
        </div>
    )
}

export default Content
