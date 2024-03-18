import React, {useRef, useEffect} from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";

import '../assets/css/global.scss';
import '../assets/css/post.scss';

import axios from "axios";
const baseUrl = 'https://troop-46-times-backend.onrender.com';

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};


function Post() {
  let titleRef = useRef(null);
  let nameRef = useRef(null);
  let textRef = useRef(null);
  let linkRef = useRef(null);

  function postPost() {
    console.log('posting')
    axios.post(`${baseUrl}/create/`, {img: linkRef.current.value, title: titleRef.current.value, name: nameRef.current.value, text: textRef.current.value}, axiosConfig).then(()=> (window.location.reload())).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
    
    <post>
    <Navbar/>
      <hr/><hr/>  
      <div className='postPage'>
        <img src='https://wallpapercave.com/wp/wp2226729.jpg'/>
        <div className="body">
          <h1>Write an Article</h1>
          <input ref={titleRef} placeholder="Title"/>
          <input ref={linkRef} placeholder="Image Link"/>
          <input ref={nameRef} placeholder="Your full name"/>
          <textarea ref={textRef} placeholder="The article!" rows="8"/>
          <button onClick={postPost}>Submit!</button>
        </div>
      </div>
    </post>
    <Footer/>
    </div>

  ); 
}

export default Post;