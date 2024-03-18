import React from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";

import '../assets/css/global.scss';
import '../assets/css/article.scss';

function Article({data}) {

    console.log("data", data);
    let dateObj = new Date(data?.createTime)
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const pMonth        = month.toString().padStart(2,"0");
    const pDay          = day.toString().padStart(2,"0");
    const newDate = `${pMonth}/${pDay}/${year}`;
  return (
    <div>
    <article>
        <Navbar/>
        <hr/><hr/>  
        <img src={data?.img}/>
        <p>{data?.name} · {newDate}</p>
            <h1>{data?.title}</h1>
            <p className='body' dangerouslySetInnerHTML={{ __html: data?.text }}></p>
        
      </article>
      <Footer/>
      </div>
  ); 
}

export default Article;