import React from "react";
import '../assets/css/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

function Navbar() {
  console.log(localStorage.getItem('verified'), sessionStorage.getItem('verified'))
  function handleLogout() {
    console.log('called')
      if (localStorage.getItem('verified')) {
        localStorage.removeItem('verified')
      } else {
        sessionStorage.removeItem('verified')
      }
    window.location.href="/"
  }
  var loggedIn = false;
  if (localStorage.getItem('verified') || sessionStorage.getItem('verified')) {
    loggedIn = true
  }
  console.log('loggedIn', loggedIn, localStorage.getItem('verified'))
  return (
      <header className='navbar'>
          <div className='section'>
            <div className='navbar__title navbar__item'><h2><a href='/'>Troop 46 Times</a></h2></div>
            <div className='navbar__item'><a href='/'>Home</a></div>
            <div className='navbar__item'><a href='/archives'>Archives</a></div>
            {console.log('test', (localStorage.getItem('verified') || sessionStorage.getItem('verified')))}
            {loggedIn && (
              <div className='navbar__item'><a href='/approve'>Unverified</a></div>
            )}
          </div>
          <div className="section">
          <div className="search-input navbar__item">
            <input type="text" placeholder="Search"/>
            <div className="icon"><FontAwesomeIcon icon={faSearch} /></div>
          </div>
          <a href="/post"><button className='post'>Post Article</button></a>
          {!loggedIn && (
              <a href='/login'><button className='login'>Scribe login</button></a>
            )}
          {loggedIn && (
              <button className='logout' onClick={handleLogout}>Log Out</button>
            )}
            
        </div>
      </header>
  ); 
}

export default Navbar;