import React from 'react'
import {logo,imageHeroDesktop,imageHeroMobile,imageHeroTablet} from "../../const"
import { DevelopersJoined, ReviewMembershipBtn,GridOverlay } from '../../ui'
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
       {/* <div className="pattern-overlay">
          <img className="bg-img" src={patternLightBg} alt="bg-img" />
          <img className="glow-bg-img" src={patternGlow} alt="glow-bg-img" />
        </div> */}
        <GridOverlay/>
      <div className="header-content">
        <div className="header-logo-div">
          <img src={logo} alt="" />
        </div>
       
        <div className="header-content-row">
          <div className="header-content-column">
            <div className="hero-content-card">
              <div className="hero-content-h1-divs mainFont">
                <div className="hero-h1-div">
                  <h1>Join</h1>
                  <h1>the</h1>
                </div>
                <div className="hero-h1-div">
                  <h1>ultimate</h1>
                  <h1>tech</h1>
                </div>
                <div className="hero-h1-div">
                  <h1>book</h1>
                  <h1>club</h1>
                </div>
              </div>
              <h5 className="hero-blurb mid-thin inter">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up <em> <strong>your</strong> </em> skills one chapter at a time.</h5>
              {/* <div> */}
              <ReviewMembershipBtn dir="down" color="dark" hoverClass="hero-btn"/>
              <DevelopersJoined color="dark"/>
              {/* </div> */}
            </div>
          </div>
          <div className="header-content-column">
           <div className="hero-img-div">
           <picture className="hero-img-picture">
              <source media="(min-width:1050px)" srcSet={imageHeroTablet}/>
              <source media="(min-width:650px)" srcSet={imageHeroMobile}/>
              <img className="hero-img" src={imageHeroDesktop} alt="img"/>
          </picture>
           </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header