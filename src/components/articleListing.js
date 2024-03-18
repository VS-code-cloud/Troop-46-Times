import React from "react";
import '../assets/css/listing.scss';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const baseUrl = 'http://troop-46-times-backend.onrender.com'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

function ArticleListing({data, approving}) {
  console.log('data, approving', data, approving)
  console.log('received data', data)
  let dateObj = new Date(data?.createTime)
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();
  const pMonth        = month.toString().padStart(2,"0");
  const pDay          = day.toString().padStart(2,"0");
  const newDate = `${pMonth}/${pDay}/${year}`;
  const boxes = {
    marginRight: "25%",
    marginLeft: "25%"
  }
  function deletePost() {
    console.log('deleting')
    axios.delete(`${baseUrl}/delete/${data.uid}`, axiosConfig).then(()=> (window.location.reload())).catch(error => {
      console.log(error)
    })
  }
  function updatePost() {
    console.log('updating')
    axios.patch(`${baseUrl}/update/${data.uid}`, {'verified': true}, axiosConfig).then(()=> (window.location.reload())).catch(error => {
      console.log(error)
    })
  }
  return (
      <listing>
        <div className='articleWrap'>
            <p>{data?.name} · {newDate}</p>

            { (approving === true) ? ( 
              <div>
                <a href={`/${data?.uid}`}><h2>{data?.title}</h2></a>
                <p className="mainText">{data?.text}</p>
              </div>
            ) : (
<div>
                <a href={`/${data?.uid}`}><h2 className='cutH2'>{data?.title}</h2></a>
                <p className="mainText cutP">{data?.text}</p>
              </div>
            )
            }

            
            
            {approving==true && (
            <div><button onClick={updatePost} style={boxes}>&#10004;</button>
            <button onClick={deletePost} style={boxes}>&#10008;</button></div>)
            }
        </div>
        <img src={data?.img}></img>
      </listing>
  ); 
}

export default ArticleListing;