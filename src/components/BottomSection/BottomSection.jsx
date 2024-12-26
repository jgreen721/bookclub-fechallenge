import React, {useEffect,useRef} from 'react'
import { imageNotAverageDesktop, imageNotAverageTablet, imageNotAverageMobile, patternCircle,logosTech } from '../../const'
import useObserver from '../../hooks/useObserver'
import "./BottomSection.css"


const BottomSection = () => {
  const bottomSectionEl = useRef();
  const isVisible = useObserver(bottomSectionEl);
  const titleRef = useRef();
  const blurbRef = useRef();
  const imgRef = useRef();
  const logoRef = useRef();




  useEffect(()=>{
    if(isVisible){
      console.log('animate bottomSection.jsx')
      // topSectionImgRef.current.classList.add("stretch-grow-el");
      // topMobileSectionImgRef.current.classList.add("stretch-grow-el");
      // titleRef.current.classList.add("clear-blur");
      // titleTwoRef.current.classList.add("clear-blur");
      // itemRef.current.querySelectorAll(".section-list-item").forEach(item=>{
      //   item.classList.add("slide-center-el")
      // })
      titleRef.current.classList.add("slide-center-el")
      blurbRef.current.classList.add("slide-center-el")
      imgRef.current.classList.add("inflate-vertically")
      logoRef.current.classList.add("spin-inflate-el")
    }
  },[isVisible])
  return (
    <div ref={bottomSectionEl} className="bottom-section">
      <div className="bottom-section-col">
        <div style={{"--i":".5s"}} ref={titleRef} className="bottom-section-title">
        <h2 className="mainFont mid-thin">Not your average book 
        <span className="club-div">
            <img className="circle-svg" src={patternCircle} alt="" />
          club
        </span>
      </h2>

        </div>
        <h5 style={{"--i":"1s"}} ref={blurbRef} className="inter mid-thin bottom-section-blurb">Connect with a community that speaks <em>your</em> language - from <strong>Python</strong> to <strong>Typescript</strong> and everything in between. Our discussions blend technical depth with practical applications.</h5>
      </div>
      <div className="bottom-section-col">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageNotAverageTablet}/>
        <source media="(min-width:550px)" srcSet={imageNotAverageMobile}/>
        <img style={{"--i":".5s"}} ref={imgRef} className="section-img bottom-section-img" src={imageNotAverageDesktop} alt="img"/>
      </picture>
      <img style={{"--i":"2s"}} ref={logoRef} className="tech-logos-img" src={logosTech} alt="" />

      </div>
    </div>
  )
}

export default BottomSection