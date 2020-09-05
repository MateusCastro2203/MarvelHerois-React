import React, {useState, useEffect} from 'react'
import Crypto from 'crypto-js'
import  '@material-ui/core'
import './herois.css'
import 'bootstrap'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Modal from "react-modal";
import Content from '../Modal/Content'

const Herois =  ({hero}) => {
    // variaveis para conectar na API da Marvel
    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';

    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);
    
    const [herois, setHerois] = useState([]);
    useEffect(async () =>{
        const result = await  fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=12&ts=${timestamp}&apikey=${keyPublic}&hash=${md5.toString()}`).then(response => response.json())
        setHerois(result.data.results);
    }, []);

    const [person,setHeroi] = useState([]);
    const openModal = (heroi) =>{
        setHeroi(heroi)
        setModalOpen(true);
    }
    const [isModalOpen, setModalOpen] = useState(false);
    
    const closeModal = () => {
        setModalOpen(false)
    }
    
    return(
        <div id="herois">
        {
            herois.map((heroi)=>(
            <div className="personagem">
                <img src={heroi.thumbnail.path+"."+heroi.thumbnail.extension} alt=""/>
                <h2 id="nameHero"> {heroi.name} </h2> 
                <p id='info'>More</p>
                <Button onClick={() => openModal(heroi)} ><KeyboardArrowDownIcon color="secondary" style={{fontSize:50}}></KeyboardArrowDownIcon></Button>
                
            </div>
            ))
        }
        <Modal id='modal'
         isOpen={isModalOpen}
         ariaHideApp={false}
        >
        <Content heroi={person}></Content>
        <button onClick={() =>closeModal()}>Close modal</button>
        </Modal>
        
    </div>
)
    
}

export default Herois
