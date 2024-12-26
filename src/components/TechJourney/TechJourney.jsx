import React, {useEffect, useRef} from 'react'
import { GridOverlay } from '../../ui'
import { patternArrow } from '../../const'
import "./TechJourney.css"

const TechJourney = () => {
  const journey = [
    {id:1,title:"Choose your membership tier"},
    {id:2,title:"Get your monthly book selection"},
    {id:3,title:"Join our discussion forums"},
    {id:4,title:"Attend exclusive meetups"},
  ]
  const techJourneyRef = useRef();
  const isVisible = useRef(techJourneyRef);


  useEffect(()=>{
    if(isVisible){
        techJourneyRef.current.classList.add("inflate-horizontally")
    }
  },[isVisible])
  return (
    <div style={{"--i":".5s"}} ref={techJourneyRef} className="tech-journey-section">
      <div className="tech-journey-content">
      <GridOverlay/>

      <h2 className="mainFont tech-journey-header">Your tech reading journey</h2>
      <div className="tech-journey-items">
        {journey.map(journeyItem=>(
          <li key={journeyItem.id} className="tech-journey-item">
            <div className="number-div">
              <h5 className="mainFont mid-thin neutral-dark">{journeyItem.id}</h5>
            </div>
            <h5 className="mainFont">{journeyItem.title}</h5>
            {journeyItem.id != 4 &&
              <img className="pattern-arrow-img" src={patternArrow} alt="" />
              }
          </li>
        ))}
      </div>
      </div>
    </div>
  )
}

export default TechJourney