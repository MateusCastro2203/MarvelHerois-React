import React, {useState, useEffect} from 'react'
import Crypto from 'crypto-js'
import './Comics.css'

function Comics({url}) {
    
    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';

    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);
    const [comics, setComics] = useState([]);
    const [comicsImg, setComisImg] = useState([])
    useEffect( () =>{
        fetchAPI();
        async function fetchAPI(){
            const result = await fetch(`${url.resourceURI}?apikey=${keyPublic}&hash=${md5.toString()}&ts=${timestamp}`).then(response => response.json());
            setComics(result.data.results[0]);
            setComisImg(result.data.results[0].thumbnail.path+'.'+result.data.results[0].thumbnail.extension);
        }
        
    }, []);
    console.log(comics,'oi');
    
    return (
        <div className="container">
            <div className="comics">
                    <img className="comicsImg" src={comicsImg} alt=""/>
                    
            </div>
            <div className="comicsDescription">
                <ul>
                   <li> <h1 className="comicsTitle">{comics.title}</h1> </li>
                    <li> <p className="comicsTitle">{comics.description}</p> </li>
                </ul>
            </div>
        </div>
    )
}

export default Comics
