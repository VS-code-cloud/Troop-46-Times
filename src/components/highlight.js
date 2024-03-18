import React, {useRef, useEffect} from "react";
import '../assets/css/highlight.scss';

function Highlight({data}) {
  const mainRef = useRef(null);
  const sideRef = useRef(null);
  const imgRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  var newDate =''
  if (data?.createTime) {
    let dateObj = new Date(data?.createTime)
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();
  const pMonth        = month.toString().padStart(2,"0");
  const pDay          = day.toString().padStart(2,"0");
  newDate = `${pMonth}/${pDay}/${year}`;
  }
  const getStyle = () => {
    
    // max height of box
    let height = window.getComputedStyle(mainRef.current).height;
    let rawHeight = parseInt(height, 10);
    sideRef.current.style.height = rawHeight + "px";

    console.log(paraRef.current.style)
    
    // clamp paragraph text
    let maxParaHeight = rawHeight-10;
    let maxLines = Math.floor(maxParaHeight / 30);
    paraRef.current.style.lineClamp = maxLines;
    paraRef.current.style["-webkit-line-clamp"] = maxLines;

    
  }

  useEffect(getStyle);

  return (
      <highlightSection>
        <div className='highlight' ref={mainRef}>
        <h1>{data?.title}</h1>{data?.name}, {newDate}
          <img src={data?.img}></img>
        </div>

        <vr></vr>

        <div ref={sideRef} className="post">
            <p ref={paraRef}>
              {data?.text}
            </p>
        </div>
      </highlightSection>
  ); 
}

export default Highlight;