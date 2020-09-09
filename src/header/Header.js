import React from 'react'
import Crypto from 'crypto-js'
import Herois from '../herois/herois.js'
import './Header.css'
import Request from '../request/Request.js'
const Header = () => {
    const keyPublic = '37f91eaebd4facebdc8035f7c753d62b';
    const keyPrivate = 'a361d56ebc8828490953812d38eac23b263ddb2b';
    var timestamp = new Date().getTime();
    var md5 = Crypto.MD5(timestamp+keyPrivate+keyPublic);

    /*function  share(){
        var name = document.getElementById('nameHero')
        Herois.shareHero(name);
    }      
    */
    return (
        <div id="header">
            <div id='logo'>
                <img src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" alt=""/>
            </div>
           
        </div>
    )
}

export default Header
