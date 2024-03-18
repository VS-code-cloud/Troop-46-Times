import React from "react";
import '../assets/css/listing.scss';

function ArticleListing({data}) {
  console.log('received data', data)
  let dateObj = new Date(data?.createTime)
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();
  const pMonth        = month.toString().padStart(2,"0");
  const pDay          = day.toString().padStart(2,"0");
  const newDate = `${pMonth}/${pDay}/${year}`;
  return (
      <listing>
        <div className='articleWrap'>
            <p>{data?.name} · {newDate}</p>
            <h2>{data?.title}</h2>
            <p className="mainText">{data?.text}</p>
        </div>
        <img src={data?.img}></img>
      </listing>
  ); 
}

export default ArticleListing;