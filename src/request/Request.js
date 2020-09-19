import React, { useState, useEffect } from 'react'
import Crypto from 'crypto-js'
import '../request/Request.css'
import Herois from '../herois/herois';
import Loading from '../loading/Loading';
const Request = () => {

    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';

    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);
    const [herois, setHerois] = useState([]);
    const[loading, setLoading] = useState(false);
    const [value, setValue] = useState(false);
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

    useEffect(async () =>{
        const result = await  fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=12&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json())
        setHerois(result.data.results);
        setLoading(true);
    }, []);

    console.log(loading);
    const heroForName = ( async() => {
        setLoading(false);
        const name = document.getElementById("hero").value;
        const rename = name.replace(" ","%20");
        const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${rename}&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json());
        console.log(result);
        if(result.data.results.length === 0) setValue(true)
        setLoading(true);
        setHerois(result.data.results);
    })

    const request = (async (letter) =>{
        setLoading(false);
        const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}&limit=100&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json())
        if(result.length === 0) setValue(true)
        setLoading(true);
        setHerois(result.data.results);
    })

    return (
        <div className="letterFind">
                <div className="found">
                    {
                        alph.map((letter)=>(
                            <button onClick ={() => request(letter)} className="letter">{letter}</button>
                        ))
                    }
                    <div id="form" > 
                        <button onClick={() => heroForName()} id="search" >search</button>
                        <input type="text" placeholder="NAME OF HERO" id="hero" name='hero' />
                        
                    </div>
                </div>
            <hr/>
            <br></br>
            {loading? 
                <div id="herois">
                    {
                        herois.map((herois,index)=> (
                            <Herois hero={herois}></Herois>
                            
                        ))
                    }                           
                </div>
                :
                <div className="load">
                    <Loading></Loading>
                </div>
             }
            <div id="notFoudHero">
                <h1>{value ? "HERO NOT FOUND": "" }</h1>
            </div>
        </div>
    )
}

export default Request
