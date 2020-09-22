import React, {useState, useEffect} from 'react'
import  '@material-ui/core'
import './herois.css'
import 'bootstrap'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Close from '@material-ui/icons/Close';
import Modal from "react-modal";
import Content from '../Modal/Content'

const Herois =  ({hero}) => {
    const customStyles = {
        content : {
          
          left                  : '0px',
          right                 : '0px',
          padding               : '10px',
          background            : '#000',
        }
      };
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
        <div>
        {
            <div className="personagem">
                <img src={hero.thumbnail.path+"."+hero.thumbnail.extension} alt=""/>
                <h2 id="nameHero"> {hero.name} </h2> 
                <p id='info'>More</p>
                <Button onClick={() => openModal(hero)} ><KeyboardArrowDownIcon color="secondary" style={{fontSize:50}}></KeyboardArrowDownIcon></Button>
            </div>
        }
        <Modal 
         isOpen={isModalOpen}
         ariaHideApp={false}
         style={customStyles}
        >
            <button onClick={() =>closeModal()} id="close"><Close color="secondary"></Close></button>
            <Content heroi={person}></Content>
        </Modal>
        
    </div>
)
    
}

export default Herois
