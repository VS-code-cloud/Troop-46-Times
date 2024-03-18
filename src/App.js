import React, { useRef, useState, useEffect } from 'react';
import App from './pages/index';
import Archive from './pages/archive'
import Approval from './pages/approval'
import ScribeLogin from './pages/scribeLogin'
import Article from './pages/article';
import Post from "./pages/post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import axios from "axios";
const baseUrl = 'http://troop-46-times-backend.onrender.com';


let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

function Routed() {

    const [data, setData] = useState([]);
  const [firstPost, setFirstPost] = useState({});
  console.log('data', data, !data)
  useEffect(() => {
    console.log('in use effect')
    // React advises to declare the async function directly inside useEffect
    async function getData() {
      const response = await axios.get(`${baseUrl}/get`, axiosConfig);
      console.log('response', response, response.data)
      let sorted = response.data;
      setData(sorted.slice(0,5));
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/archives" element={<Archive/>}/>
      {(localStorage.getItem('verified') || sessionStorage.getItem('verified')) && (
        <Route path="/approve" element={<Approval/>}/>
      )}
      
      <Route path="/login" element={<ScribeLogin/>}/>
      <Route path='/post' element={<Post/>}/>

      {data.map(x => {
          nkey=nkey+1
          console.log(x.uid);
          console.log(data);
          return <Route key={x.uid} path={`/${x.uid}`} element={<Article data={x}/>}/>
      })}


    </Routes>
  </BrowserRouter>
  
  )
}

export default Routed;