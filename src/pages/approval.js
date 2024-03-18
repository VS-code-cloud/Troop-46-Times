import React, { useRef, useState } from 'react';
import '../assets/css/global.scss';

// import components
import Header from "../components/header";
import ArticleListing from '../components/articleListing';
import Footer from "../components/footer";

function Approval() {
  let data = [{'data1': 'RIP'}, {'data1': 'RIP'}, {'data1': 'RIP'}, {'data1': 'RIP'}, {'data1': 'RIP'}]
  return (
    <div>
    <div className='bodyWrapTotal'>
        <Header/>
        <hr/><hr/>   
        {data.map(x=> {
            return <ArticleListing/>
        })}     
    </div>
    <Footer/>
    </div>
  );
}

export default Approval;
