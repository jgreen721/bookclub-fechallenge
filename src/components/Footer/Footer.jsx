import React, {useRef, useEffect} from 'react'
import {logoBluesky,logoLinkedin} from "../../const"
import {ReviewMembershipBtn,DevelopersJoined} from '../../ui'
import useObserver from '../../hooks/useObserver'
import "./Footer.css"

const Footer = () => {
  const footerLinks =[
    {id:1,title:"Butterfly",icon:logoBluesky},
    {id:2,title:"LinkedIn",icon:logoLinkedin},
  ]
  const footerRef = useRef();
  const isVisible = useObserver(footerRef)


  useEffect(()=>{
    if(isVisible){
      footerRef.current.classList.add("clear-grey-el")
    }
  })
  return (
<footer ref={footerRef} className="footer">
  <div className="footer-content">
    <div className="footer-card">
      <div className="footer-h2">
        <h2 className="neutral-50 mainFont">Ready to debug your reading list?</h2>
      </div>
      <div className="footer-card-body">
  
      <ReviewMembershipBtn dir="up" color="light" hoverClass="footer-btn"/>
      <DevelopersJoined color="light"/>


    </div>
    </div>
    <div className="footer-bottom-row neutral-50 inter">
    <div className="footer-bottom-borderline"></div>
<div className="footer-bottom-row-content">
      <div className="footer-bottom-row-section">
        <small>&copy; 2024 - Tech Book Club</small>
      </div>
      <div className="footer-bottom-row-section">
        <ul className="footer-links">
          {footerLinks.map(footerLink=>(
          <li key={footerLink.id} className="footer-link-item">
          
            <img src={footerLink.icon} alt="icon" />
          </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer