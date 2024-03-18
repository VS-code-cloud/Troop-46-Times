import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/global.scss';

// import components
import Header from "../components/header";
import ArticleListing from '../components/articleListing';
import Footer from "../components/footer";
import axios from "axios";

const baseUrl = 'http://troop-46-times-backend.onrender.com'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};


function Archive() {
  const [data, setData] = useState([]);
  console.log('data', data, !data)
  useEffect(() => {
    console.log('in use effect')
    // React advises to declare the async function directly inside useEffect
    async function getData() {
      const response = await axios.get(`${baseUrl}/get`, axiosConfig);
      console.log('response', response, response.data)
      let sorted = response.data
      sorted.sort(function(a,b) {
        return b.score - a.score
    });
      setData(sorted);
    };

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (data.length==0) {
      console.log('getting data')
      getData();
  }
  }, []);  
  var nkey = 0
  return (
    <div>
    <div className='bodyWrapTotal'>
        <Header/>
        <hr/><hr/>   
        {data.map(x=> {
          nkey=nkey+1
            return <ArticleListing key={nkey} data={x}/>
        })}     
    </div>
    <Footer/>
    </div>
  );
}

export default Archive;