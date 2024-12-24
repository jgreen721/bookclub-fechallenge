import React from 'react'
import { imageReadTogetherMobile,imageReadTogetherTablet, imageReadTogetherDesktop,iconCheck } from '../../const'
import "./TopSection.css"

const TopSection = () => {
  const stats =[
    {id:1,blurb:"Monthly curated tech reads selected by industry experts"},
    {id:2,blurb:"Virtual and in-person meetups for deep-dive discussions"},
    {id:3,blurb:"Early access to new tech book releases"},
    {id:4,blurb:"Author Q&A sessions with tech thought leaders"},
  ]
  return (
    <div className="top-section">
      <div className="section-column desktop">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageReadTogetherTablet}/>
        <source media="(min-width:550px)" srcSet={imageReadTogetherMobile}/>
        <img className="section-img" src={imageReadTogetherDesktop} alt="img"/>
      </picture>
      </div>
      <div className="section-column">
        <div className="section-column-content">
          <div className="section-title">
          <h2 className="mainFont semi-bold">Read together,</h2>
          <h2 className="mainFont semi-bold">grow together</h2>
          </div>
          <div className="section-list-items">
            {stats.map(stat=>(
              <li className="section-list-item" key={stat.id}>
                <div className="check-icon-div">
                  <img src={iconCheck} alt="" />
                </div>
                <small className="mainFont mid-thin">{stat.blurb}</small>
              </li>
            ))}
          </div>
        </div>
        {/* <div className="section-column mobile">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageReadTogetherTablet}/>
        <source media="(min-width:550px)" srcSet={imageReadTogetherMobile}/>
        <img className="section-img" src={imageReadTogetherDesktop} alt="img"/>
      </picture>
      </div> */}
      </div>
      <div className="mobile-column mobile">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageReadTogetherTablet}/>
        <source media="(min-width:550px)" srcSet={imageReadTogetherMobile}/>
        <img className="section-img" src={imageReadTogetherDesktop} alt="img"/>
      </picture>
      </div>
    </div>
  )
}

export default TopSection