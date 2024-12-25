import React from 'react'
import {logo,imageHeroDesktop,imageHeroMobile,imageHeroTablet} from "../../const"
import { DevelopersJoined, ReviewMembershipBtn,GridOverlay } from '../../ui'
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      
        <GridOverlay/>
      <div className="header-content">
        <div style={{"--i":".5s"}} className="header-logo-div clear-blur">
          <img src={logo} alt="" />
        </div>
       
        <div className="header-content-row">
          <div className="header-content-column">
            <div className="hero-content-card">
              <div className="hero-content-h1-divs mainFont">
                <div style={{"--i":".25s"}} className="hero-h1-div">
                  <h1 className="hero-h1">Join</h1>
                  <h1 className="hero-h1">the</h1>
                </div>
                <div style={{"--i":".75s"}} className="hero-h1-div">
                  <h1 className="hero-h1">ultimate</h1>
                  <h1 className="hero-h1">tech</h1>
                </div>
                <div style={{"--i":"1.25s"}} className="hero-h1-div">
                  <h1  className="hero-h1">book</h1>
                  <h1  className="hero-h1">club</h1>
                </div>
              </div>
              <h5 style={{"--i":"1.5s"}} className="hero-blurb mid-thin inter clear-blur">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up <em> <strong>your</strong> </em> skills one chapter at a time.</h5>
              <div style={{"--i":"2s"}} className="clear-blur">
              <ReviewMembershipBtn dir="down" color="dark" hoverClass="hero-btn"/>
              <div className="my-2">
              <DevelopersJoined color="dark"/>
              </div>
              </div>
            </div>
          </div>
          <div className="header-content-column">
           <div className="hero-img-div">
           <picture className="hero-img-picture">
              <source media="(min-width:1050px)" srcSet={imageHeroTablet}/>
              <source media="(min-width:650px)" srcSet={imageHeroMobile}/>
              <img style={{"--i":"1s"}} className="hero-img stretch-grow-el" src={imageHeroDesktop} alt="img"/>
          </picture>
          <picture className="hero-img-picture-blur">
              <source media="(min-width:1050px)" srcSet={imageHeroTablet}/>
              <source media="(min-width:650px)" srcSet={imageHeroMobile}/>
              <img className="hero-img stretch-grow-el" src={imageHeroDesktop} alt="img"/>
          </picture>
           </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header