import React from 'react'
import { patternLightBg,patternGlow} from "../../const"

import "./GridOverlay.css"

const GridOverlay = () => {
  return (
  <div className="pattern-overlay">
    <img className="bg-img" src={patternLightBg} alt="bg-img" />
    <img className="glow-bg-img" src={patternGlow} alt="glow-bg-img" />
  </div>
  )
}

export default GridOverlay