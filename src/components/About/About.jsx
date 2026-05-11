import React, { useState } from 'react'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
import video from '../../assets/GreatStack.mp4'


import './About.css'

const About = () => {
  const [videoshow,setvideoshow]=useState(false);
  return (
    <>
    <div  id='about' className='About-section'>
      <div className="info">
        <p className='Heading'>About University</p>
        <h1 >Nurturing Tomorrow's Leaders Today</h1>
        <p className='des'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p className='des'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p className='des'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
      <div className="image">
        <img src={about} alt="" />
        <img className='play-icon' onClick={()=>setvideoshow(true)} src={play} alt="" />
        </div>
      <div onClick={()=>setvideoshow(false)} className={`video-sec ${videoshow? "active":""}`}>
        <video onClick={(e)=>e.stopPropagation()} controls src={video}></video>
      </div>
    </div>
    </>
    
  )
}

export default About
