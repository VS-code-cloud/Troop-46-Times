import React from "react";
import '../assets/css/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

function Navbar() {
  console.log(localStorage.getItem('verified'), sessionStorage.getItem('verified'))
  const logout = () => {
      if (localStorage.getItem('verified')) {
        localStorage.setItem('verified', null)
      } else {
        sessionStorage.setItem('verified', null)
      }
  }
  return (
      <header className='navbar'>
          <div className='section'>
            <div className='navbar__title navbar__item'><h2><a>Troop 46 Times</a></h2></div>
            <div className='navbar__item'><a href='/'>Home</a></div>
            <div className='navbar__item'><a href='/archives'>Archives</a></div>
            {(localStorage.getItem('verified') || sessionStorage.getItem('verified')) && (
              <div className='navbar__item'><a href='/approve'>Unverified</a></div>
            )}
          </div>
          <div className="section">
          <div className="search-input navbar__item">
            <input type="text" placeholder="Search"/>
            <div className="icon"><FontAwesomeIcon icon={faSearch} /></div>
          </div>
          <button className='post'>Post Article</button>
          {!(localStorage.getItem('verified') || sessionStorage.getItem('verified')) && (
              <button className='login'><a href='/login'>Scribe Login</a></button>
            )}
          {(localStorage.getItem('verified') || sessionStorage.getItem('verified')) && (
              <button className='logout' onClick={logout}>Log Out</button>
            )}
            
        </div>
      </header>
  ); 
}

export default Navbar;