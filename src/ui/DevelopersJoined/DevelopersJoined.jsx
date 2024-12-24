import React from 'react'
import {imageAvatars} from "../../const"
import Stars from "../Stars/Stars"
import "./DevelopersJoined.css"

const DevelopersJoined = ({color}) => {
  const stars = [1,2,3,4,5]

  return (
    <div className="footer-users-reviews-div">
    <div className="img-avatars-div">
      <img className="img-avatars" src={imageAvatars} alt="" />
    </div>
    <div className="stars-and-caption-div">
      {/* <ul className="stars">
        {stars.map(star=>(
      <li key={star} className="star-div">
        <img src={iconStar} alt="" />
      </li>
        ))}
      </ul> */}
      <Stars/>
      <small className={`mainFont mid-thin ${color == 'light' ? 'neutral-0' : 'neutral-dark'}`}>200+ developers joined already</small>
    </div>
      </div>
  )
}

export default DevelopersJoined