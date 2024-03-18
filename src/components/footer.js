import React from "react";
import '../assets/css/footer.scss';

function Navbar() {
  return (
      <footer>
        <div className='links'>
            <p>Troop 46 Times</p>
            <div className = 'sublinks'>
              <a>Post</a>
              <a>Login</a>
              <a>Archive</a>
              <a>Main Site</a>
              <a>Copyright (c) Troop 46</a>
            </div>
        </div>
      </footer>
  ); 
}

export default Navbar;