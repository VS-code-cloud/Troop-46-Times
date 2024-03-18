import React, { useRef, useState } from 'react';
import '../assets/css/global.scss';

// import components
import Header from "../components/header";
import Highlight from "../components/highlight";
import ArticleListing from '../components/articleListing';
import Footer from "../components/footer";

function App() {
  
  return (
    <div>
    <div className='bodyWrapTotal'>
        <Header/>
        <hr/><hr/>
        <Highlight/>
        
        <ArticleListing/>
        <ArticleListing/>
        <ArticleListing/>
        <ArticleListing/>

        
    </div>
    <Footer/>
    </div>
  );
}

export default App;
