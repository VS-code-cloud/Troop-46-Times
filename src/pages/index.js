import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/global.scss';

// import components
import Header from "../components/header";
import Highlight from "../components/highlight";
import ArticleListing from '../components/articleListing';
import Footer from "../components/footer";
import axios from "axios";
const baseUrl = 'https://troop-46-times-backend.onrender.com';


let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

function App() {
  const [data, setData] = useState([]);
  const [firstPost, setFirstPost] = useState({});
  console.log('data', data, !data)
  useEffect(() => {
    console.log('in use effect')
    // React advises to declare the async function directly inside useEffect
    async function getData() {
      const response = await axios.get(`${baseUrl}/get`, axiosConfig);
      console.log('response', response, response.data)
      let sorted = response.data
      let tFirst = sorted.pop()
      setFirstPost(tFirst)
      sorted.reverse();
      setData(sorted.slice(0,5));
    };

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (data.length==0) {
      console.log('getting data')
      getData();
  }
  }, []);
  /*const testPosts = [{
    name: 'Abhitej Kanuri',
    createTime: '3/16/2024',
    title: "Why I'm the best scout, and how you can be like me too",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.`,
    img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },{
    name: 'Abhitej Kanuri',
    createTime: '3/16/2024',
    title: "Why I'm the best scout, and how you can be like me too",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.`,
    img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },{
    name: 'Abhitej Kanuri',
    createTime: '3/16/2024',
    title: "Why I'm the best scout, and how you can be like me too",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.`,
    img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },{
    name: 'Abhitej Kanuri',
    createTime: '3/16/2024',
    title: "Why I'm the best scout, and how you can be like me too",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.`,
    img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },{
    name: 'Abhitej Kanuri',
    createTime: '3/16/2024',
    title: "Why I'm the best scout, and how you can be like me too",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.`,
    img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
  },]*/
  var nkey = 0
  return (
    <div>
    <div className='bodyWrapTotal'>
        <Header/>
        <hr/><hr/>
        <Highlight data={firstPost}/>
        {data.map(x => {
          nkey=nkey+1
          return <ArticleListing key={nkey} data={x}/>
        })}
        
    </div>
    <Footer/>
    </div>
  );
}

export default App;
