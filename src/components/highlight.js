import React, {useRef, useEffect} from "react";
import '../assets/css/highlight.scss';

function Highlight() {
  const mainRef = useRef(null);
  const sideRef = useRef(null);
  const imgRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);

  const getStyle = () => {
    
    // max height of box
    let height = window.getComputedStyle(mainRef.current).height;
    let rawHeight = parseInt(height, 10);
    sideRef.current.style.height = rawHeight + "px";

    console.log(paraRef.current.style)
    
    // clamp paragraph text
    let imgHeight = window.getComputedStyle(imgRef.current).height;
    let rawImgHeight = parseInt(imgHeight, 10)
    let headerHeight = window.getComputedStyle(headerRef.current).height;
    let rawHeadHeight = parseInt(headerHeight, 10)
    let maxParaHeight = rawHeight - rawImgHeight - rawHeadHeight- 27;
    let maxLines = Math.floor(maxParaHeight / 30);
    paraRef.current.style.lineClamp = maxLines;
    paraRef.current.style["-webkit-line-clamp"] = maxLines;

    console.log("2", imgHeight, rawImgHeight, headerHeight, rawHeadHeight, maxParaHeight, maxLines)
    
  }

  useEffect(getStyle);

  return (
      <highlightSection>
        <div className='highlight' ref={mainRef}>
        <h1>Hi there hello</h1>
          <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'></img>
        </div>

        <vr></vr>

        <div ref={sideRef} className="post">
            <img ref={imgRef} src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'></img>
            <h2 ref={headerRef}>Lorem Ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet Lorem Ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet Lorem Ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet</h2>
            <p ref={paraRef}>
              
Paragraphs

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.

Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.

Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi.

            </p>
        </div>
      </highlightSection>
  ); 
}

export default Highlight;