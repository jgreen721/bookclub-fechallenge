import React, {useRef,useEffect} from 'react'
import { imageReadTogetherMobile,imageReadTogetherTablet, imageReadTogetherDesktop,iconCheck } from '../../const'
import useObserver from '../../hooks/useObserver'
import "./TopSection.css"

const TopSection = () => {
  const stats =[
    {id:1,delay:".5s",blurb:"Monthly curated tech reads selected by industry experts"},
    {id:2,delay:"1s",blurb:"Virtual and in-person meetups for deep-dive discussions"},
    {id:3,delay:"1.5s",blurb:"Early access to new tech book releases"},
    {id:4,delay:"2s",blurb:"Author Q&A sessions with tech thought leaders"},
  ]
  const topSectionEl = useRef();
  const topSectionImgRef = useRef();
  const titleRef = useRef();
  const titleTwoRef = useRef();
  const topMobileSectionImgRef = useRef();
  const itemRef = useRef();
  const isVisible = useObserver(topSectionEl);


  useEffect(()=>{
    if(isVisible){
      // console.log('animate TopSection.jsx!!')
      topSectionImgRef.current.classList.add("stretch-grow-el");
      topMobileSectionImgRef.current.classList.add("stretch-grow-el");
      titleRef.current.classList.add("clear-blur");
      titleTwoRef.current.classList.add("clear-blur");
      itemRef.current.querySelectorAll(".section-list-item").forEach(item=>{
        item.classList.add("slide-center-el")
      })
    }
  },[isVisible])

  return (
    <div ref={topSectionEl} className="top-section">
      <div style={{"--i":".5s"}} ref={topSectionImgRef} className="section-column section-img-column desktop">
      <picture>
        <source media="(min-width:1050px)" srcSet={imageReadTogetherTablet}/>
        <source media="(min-width:550px)" srcSet={imageReadTogetherMobile}/>
        <img className="section-img" src={imageReadTogetherDesktop} alt="img"/>
      </picture>
      </div>
      <div className="section-column">
        <div className="section-column-content">
          <div className="section-title">
          <h2 ref={titleRef} style={{"--i":".5s"}} className="mainFont semi-bold top-section-title">Read together,</h2>
          <h2 ref={titleTwoRef} style={{"--i":"1s"}} className="mainFont semi-bold top-section-title"><span className="highlight"><span className="priority">grow</span></span> together</h2>
          </div>
          <div ref={itemRef} className="section-list-items">
            {stats.map(stat=>(
              <li style={{"--i":stat.delay}} className="section-list-item" key={stat.id}>
                <div className="check-icon-div">
                  <img src={iconCheck} alt="" />
                </div>
                <small className="mainFont mid-thin">{stat.blurb}</small>
              </li>
            ))}
          </div>
        </div>
  
      </div>
      <div style={{"--i":".5s"}} ref={topMobileSectionImgRef} className="mobile-column mobile section-img-column">
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