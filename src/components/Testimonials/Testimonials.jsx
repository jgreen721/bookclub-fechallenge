import React, {useEffect, useRef} from 'react'
import {Stars} from "../../ui"
import useObserver from '../../hooks/useObserver'
import "./Testimonials.css"

const Testimonials = () => {
  const testimonialRef = useRef();
  const isVisible = useObserver(testimonialRef)


  useEffect(()=>{
    if(isVisible){
      testimonialRef.current.classList.add("rotate-x-element");
    }
  })
  return (
<div ref={testimonialRef} className="testimonial-section">
  <Stars />
  <div className="testimonials-quote">
    <div className="testimonial-quote mainFont">
      <h3>
        <span className="quotation">"</span>This book club transformed my
        technical reading from a solitary activity into an enriching community
        experience. The The discussions are gold!<span className="quotation"
          >"</span>
      </h3>
    </div>
  </div>
  
  <div className="testimonial-text-row inter mid-thin">
    <h5 className="mid-thin">Sarah Chen,</h5>
    <h5 className="mid-thin">Software Architect</h5>
  </div>
  
</div>
  )
}

export default Testimonials