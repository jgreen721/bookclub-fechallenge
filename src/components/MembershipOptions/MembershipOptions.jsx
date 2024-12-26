import React, {useRef, useEffect} from 'react'
import { iconCheck,patternGlow } from '../../const'
import useObserver from '../../hooks/useObserver'
import "./MembershipOptions.css"
const MembershipOptions = () => {
  const memberships=[
    {id:1,delay:".5s",name:"Starter",price:"$19",label:"/month",features:[{id:1,title:"1 book/month"},{id:2,title:"Online forums"}],btnText:"Subscribe now"},
    {id:2,delay:"1.25s",name:"Pro",price:"$29",label:"/month",features:[{id:1,title:"2 books/month"},{id:2,title:"Virtual meetups"}],btnText:"Subscribe now"},
    {id:3,delay:"2s",name:"Enterprise",price:"Custom",label:"",features:[{id:1,title:"Team access"},{id:2,title:"Private sessions"}],btnText:"Talk to us"},
  ]
  const membershipRef = useRef();
  const isVisible = useObserver(membershipRef);
  const titleRef = useRef();
  const membershipsRef = useRef();


  useEffect(()=>{
    if(isVisible){
      titleRef.current.classList.add("drop-el");
      membershipsRef.current.querySelectorAll(".outside-card").forEach(el=>el.classList.add("stretch-grow-el"));
      membershipRef.current.querySelector(".center-card").classList.add("clear-blur")
    }
  },[isVisible]);
  return (
    <div ref={membershipRef} id="membershipoptions" className="memberships-section">
      <h1 style={{"--i":".5s"}} ref={titleRef} className="memberships-title mainFont">
        Membership options
      </h1>
      <ul ref={membershipsRef} className="memberships">
        {memberships.map(membership=>(
          <li style={{"--i":membership.delay}} key={membership.id} className={`${membership.id == 2 ? 'center-card' : 'outside-card'} membership-card`}>
            {membership.id == 2 && 
            <div className="pattern-overlay">
              <img className="card-glow-bg-img" src={patternGlow} alt="" />
              </div>}
              <div className="membership-card-content">
            <h3 className="mainFont membership-name">{membership.name}</h3>
            <div className="membership-price">
              <h3 className="mainFont">{membership.price}</h3>
              <h5 className="inter mid-thin">{membership.label}</h5>
            </div>
            <ul className="membership-features">
            {membership.features.map(feature=>(
              <li className="membership-feature-item" key={feature.id}>
                {/* <div> */}
                  <img src={iconCheck} alt="" />
                  {/* <svg className="icon-check" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="26" height="26" x="1" y="1" stroke="#385159" stroke-width="2" rx="3"/><path className="check-icon" fill="#385159" d="m19.06 6.8 1.3 2.2c-2.26 1.06-3.92 2.54-4.96 4.46-1.02 1.9-1.56 4.42-1.6 7.54h-2.6c-.3-2.62-1.7-4.56-4.4-5.28l.92-2.44c1.04.32 1.96.88 2.76 1.7.82.82 1.36 1.74 1.64 2.78.46-4.86 2.8-8.64 6.94-10.96Z"/></svg> */}
                {/* </div> */}
                <h5 className="inter mid-thin">{feature.title}</h5>
              </li>
            ))}
            </ul>
            <button className="subscribe-btn">{membership.btnText}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MembershipOptions