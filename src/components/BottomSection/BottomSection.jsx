import React from 'react'
import { imageNotAverageDesktop, imageNotAverageTablet, imageNotAverageMobile, patternCircle,logosTech } from '../../const'
import "./BottomSection.css"


const BottomSection = () => {
  return (
    <div className="bottom-section">
      <div className="bottom-section-col">
        <div className="bottom-section-title">
        <h2 className="mainFont mid-thin">Not your average book 
        <span className="club-div">
            <img className="circle-svg" src={patternCircle} alt="" />
          club
        </span>
      </h2>

        </div>
        <h5 className="inter mid-thin">Connect with a community that speaks your language - from <strong>Python</strong> to <strong>Typescript</strong> and everything in between. Our discussions blend technical depth with practical applications.</h5>
      </div>
      <div className="bottom-section-col">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageNotAverageTablet}/>
        <source media="(min-width:550px)" srcSet={imageNotAverageMobile}/>
        <img className="section-img" src={imageNotAverageDesktop} alt="img"/>
      </picture>
      <img className="tech-logos-img" src={logosTech} alt="" />

      </div>
    </div>
  )
}

export default BottomSection