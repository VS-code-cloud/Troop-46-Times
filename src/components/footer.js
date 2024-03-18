import React from "react";
import '../assets/css/footer.scss';

function Footer() {
  return (
      <footer>
        <div className='links'>
            <p>Troop 46 Times</p>
            <div className = 'sublinks'>
              <a href='https://troop46.org'>https://troop46.org/</a>
              <p>Copyright (c) Troop 46</p>
            </div>
        </div>
      </footer>
  ); 
}

export default Footer;