import React from 'react'
import {iconArrowDown,iconArrowUp} from "../../const"
import './ReviewMembershipBtn.css'

const ReviewMembershipBtn = ({dir,color,hoverClass}) => {
  return (
    <a href="#membershipoptions" className={`${color == 'light' ? 'border-light' : 'border-dark'} membership-btn ${hoverClass}`}>
    <p className={`${color == 'light' ? 'neutral-0' : 'neutral-dark'} mainFont membershipbtn-text bold`}>Review membership options</p>
    <div className="arrow-div">
      <img src={dir == "up" ? iconArrowUp : iconArrowDown} alt="arrow-icon" />
    </div>
  </a>
  )
}

export default ReviewMembershipBtn