import React from 'react'
import {logoBluesky,logoLinkedin} from "../../const"
import {ReviewMembershipBtn,DevelopersJoined} from '../../ui'
import "./Footer.css"

const Footer = () => {
  const footerLinks =[
    {id:1,title:"Butterfly",icon:logoBluesky},
    {id:2,title:"LinkedIn",icon:logoLinkedin},
  ]
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="footer-card">
      <div className="footer-h2">
        <h2 className="neutral-50 mainFont">Ready to debug your reading list?</h2>
      </div>
      <div className="footer-card-body">
      {/* <a href="#membershipoptions" className="footer-link-btn">
        <h5 className="neutral-0 mainFont">Review membership options</h5>
        <div className="arrow-div">
          <img src={iconArrowUp} alt="arrow-icon" />
        </div>
      </a> */}
      <ReviewMembershipBtn dir="up" color="light" hoverClass="footer-btn"/>
      <DevelopersJoined/>
      {/* <div className="footer-users-reviews-div">
    <div className="img-avatars-div">
      <img className="img-avatars" src={imageAvatars} alt="" />
    </div>
    <div className="stars-and-caption-div">
      <ul className="stars">
        {stars.map(star=>(
      <li key={star} className="star-div">
        <img src={iconStar} alt="" />
      </li>
        ))}
      </ul>
      <small className="mainFont thin neutral-0">200+ developers joined already</small>
    </div>
      </div> */}

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