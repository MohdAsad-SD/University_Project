import React, { useState } from "react";
import "./Testimonials.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
const obj = [
  {
    title: "Emily Williams",
    profile: user1,
    college: "Edusity, USA",
    comment:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    title: "William Jackson",
    profile: user2,
    college: "Edusity, USA",
    comment:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    title: "Emily Williams",
    profile: user3,
    college: "Edusity, USA",
    comment:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    title: "William Jackson",
    profile: user4,
    college: "Edusity, USA",
    comment:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
];

const Testimonials = () => {
  const windowswidth=window.innerWidth<=748 ? 1:2;
  const maxslide=Math.ceil(obj.length/windowswidth)-1;
  
  const nextSlide=()=>{
    if(current<maxslide){
      setCurrent(prev=>prev+1);
    }
  };
  const prevSlide=()=>{
    
    setCurrent(prev=> prev>0 ? prev-1:0);
    
  };
  const [current,setCurrent]=useState(0);
  return (
    <div id="testimonials" className="main">
      <div className="testi_top">
          <p className="testi_title">TESTIMONIALS</p>
        <h1 className="testi_stu">What Student Says</h1>
      </div>
      
      <div className="students_comments_section">
        <div onClick={prevSlide} className="prev">
          <img src={back} alt="" />
        </div>
        <div className="slider_wrapper">
          <div className="comments" style={{transform:`translateX(-${current*100}%)`}}>
            {obj.map((element, index) => (
              <div className="testi_card" key={index}>
                <div className="top_info">
                  <div className="profile_pic">
                    <img src={element.profile} alt="" />
                  </div>
                  <div className="user_name">
                    <h2 className="user__name">{element.title}</h2>
                    <p className="college_name">{element.college}</p>
                  </div>
                </div>
                <p className="des">{element.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div onClick={nextSlide} className="next">
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
