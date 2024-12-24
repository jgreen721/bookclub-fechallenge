import React from 'react'
import { iconStar } from '../../const'
import "./Stars.css"

const Stars = () => {
    const stars = [1,2,3,4,5]

  return (
    <ul className="stars">
    {stars.map(star=>(
  <li key={star} className="star-div">
    <img src={iconStar} alt="" />
  </li>
    ))}
  </ul>
  )
}

export default Stars