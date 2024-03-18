import React from "react";
import '../assets/css/footer.scss';

function Navbar() {
  return (
      <footer>
        <div className='links'>
            <p>Troop 46 Times</p>
            <div className = 'sublinks'>
              <a>https://troop46.org/</a>
              <a>Copyright (c) Troop 46</a>
            </div>
        </div>
      </footer>
  ); 
}

export default Navbar;