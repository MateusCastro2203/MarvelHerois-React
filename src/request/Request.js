import React, { useState, useEffect } from 'react'
import Crypto from 'crypto-js'
import { Button } from '@material-ui/core';
import '../request/Request.css'
import Herois from '../herois/herois';
const Request = () => {

    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';

    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);
    
    const [herois, setHerois] = useState([]);

    const [person,setHeroi] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    console.log(herois)
    const request = (async (letter) =>{
        const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}&limit=100&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json())
        setHerois(result.data.results);
        
    })

    return (
        <div className="letterFind">
            {
                alph.map((letter, index)=>(
                    <button onClick ={() => request(letter)} className="letter">{letter}</button>
                ))
                
            }
            <Herois heroi={herois}></Herois>
        </div>
    )
}

export default Request
