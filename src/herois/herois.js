import React, {useState, useEffect} from 'react'
import Crypto from 'crypto-js'
import  '@material-ui/core'
import './herois.css'
import 'bootstrap'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'

const Herois = () => {
    // variaveis para conectar na API da Marvel
    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';

    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);
    
    const [herois, setHerois] = useState([]);

    useEffect(async () =>{
        const result = await  fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=12&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json())
        console.log(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=12&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`)
        console.log(result.data.results)
        setHerois(result.data.results);
    }, []);
    return(
        
            <div id="herois">
                {herois.map((heroi, index) => (
                    <div className="personagem">
                        <img src={heroi.thumbnail.path+"."+heroi.thumbnail.extension} alt=""/>
                        <h2 key={index}> {heroi.name} </h2> 
                        <Button  ><KeyboardArrowDownIcon color="secondary" style={{fontSize:50}}></KeyboardArrowDownIcon></Button>
                        
                    </div>
                ))}

            </div>
    )
    
    // Conexão na API da Marvel para buscar todos os Herois
         
    
   /* return (
        
        <div className="container">
             <form id='form' >
                <input type="text" placeholder="Enter the name of the hero" id='nameHero'/>
                <input id="search" type="submit" value="Search"/>
            </form>
            <p></p>
            
            <div id='herois' className="themed-container">
            </div>
        </div>
    )
    */
}

export default Herois
