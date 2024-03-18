import React from "react";
import '../assets/css/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

function Navbar() {
  return (
      <header className='navbar'>
          <div className='section'>
            <div className='navbar__title navbar__item'><h2><a>Troop 46 Times</a></h2></div>
            <div className='navbar__item'><a href='#aboutme'>Home</a></div>
            <div className='navbar__item'><a href='#aboutme'>Archives</a></div>
          </div>
          <div className="section">
          <div className="search-input navbar__item">
            <input type="text" placeholder="Search"/>
            <div className="icon"><FontAwesomeIcon icon={faSearch} /></div>
          </div>
          <button className='post'>Post Article</button>
          <button className='login'>Scribe Login</button>
            
        </div>
      </header>
  ); 
}

export default Navbar;