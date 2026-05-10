import React from 'react'
import "./Contact.css";
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import phone from '../../assets/phone-icon.png'
import arrow from '../../assets/white-arrow.png'
import { useState } from 'react';
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key",import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if(data.success){
        event.target.reset();
    }
  };
  return (

    <div id='contact' className='contact_main'>
        <div className="contact_heading">
            <p>CONTACT US</p>
            <h1>Get in Touch</h1>
        </div>
        <div className="top">
            <div className="left">
                <div className="send_title">
                    <h1>Send us a message</h1>
                    <img src={msg} alt="" />
                </div>
                <p style={{color:"#676767"}}>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <div className="icon_name">
                    <h2><img src={mail} alt="" />asadnafees2005@gmail.com</h2>
                    <h2><img src={phone} alt="" />+91 7505325070</h2>
                    <h2><img src={location} alt="" />India,SRE</h2>
                </div>
            </div>
            <div className="right">
                <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column",gap:"25px"}}>
                    <div className='inputs'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' required />
                </div>
                <div className='inputs'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" name="phone" id="phone" placeholder='Enter your mobile number' />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email id' required />
                </div>
                <div className='inputs'>
                    <label htmlFor="msg">Write Your Messages Here</label>
                    <textarea name="msg" id="msg" placeholder='Enter your message'></textarea>
                </div>
                <button type='submit' className='sub_cont'>Submit now<img src={arrow} alt="" /></button>

                </form>
                
                <span>{result}</span>
            </div>
        </div>
        <div className="footer"></div>
      
    </div>
  )
}

export default Contact
