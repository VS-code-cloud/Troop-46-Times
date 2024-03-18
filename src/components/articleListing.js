import React from "react";
import '../assets/css/listing.scss';

function ArticleListing() {
  return (
      <listing>
        <div className='articleWrap'>
            <p>Abhitej Kanuri · 3/16/2024</p>
            <h2>Why I'm the best scout, and how you can be like me too!Why I'm the best scout, and how you can be like me too!Why I'm the best scout, and how you can be like me too!</h2>
            <p className="mainText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
        </div>
        <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'></img>
      </listing>
  ); 
}

export default ArticleListing;