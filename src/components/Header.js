///rafce irá aparecer um snippet do header

import React from 'react';
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import switchThemeIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src= {punkLogo} className='punkLogo' alt='' />
        </div>
        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon}/>
            </div>
            <input className='searchInput' placeholder='Coleção, itens ou usuário!'/>
        </div>
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Crie</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={switchThemeIcon} />
            </div>
            <div className='loginButton'>
                Login
            </div>
        </div>

    </div>
  )
}

export default Header