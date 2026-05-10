import './Program.css'
import React from 'react'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'
const images=[
    program1,
    program2,
    program3,
]
const icon=[
    icon1,
    icon2,
    icon3,
]
const course=[
    "Graduation Degree",
    "Master Degree",
    "Post Graduation",
]

const Programs = () => {
  return (
    <div id='program'>
        <div className="titles">
            <p>OUR PROGRAM</p>
            <h1>What We Offer</h1>
        </div>
        <div className="programs">
            {images.map((img,index)=>(
                <div key={index} className="pro">
                    <img src={img} alt="" />
                    <div className="overlay"></div>
                    <div className='icondiv'>
                        <img src={icon[index]} alt="" />
                        <p>{course[index]}</p>
                    </div>
                </div>
            ))}
        </div>
        
      
    </div>
  )
}

export default Programs
