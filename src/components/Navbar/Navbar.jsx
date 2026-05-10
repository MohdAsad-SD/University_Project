import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  const [isOpen,setisOpen]=useState(false);
  const [scroll,setscroll]=useState(false);
  useEffect(()=>{
    const handlescroll=()=>{
      if(window.scrollY > 20){
        setscroll(true);
      }
      else{
        setscroll(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return ()=> window.removeEventListener("scroll", handlescroll);

  },[])
  return (
    <nav id='navbar' className={`navbar ${scroll? "scrolled":""}`}>
        <img src={logo} alt="" />
        <div className='hambut'>
          <button onClick={()=>setisOpen(isOpen=>!isOpen)}>
            <img src={menu} alt="" />
          </button>

        </div>
        <div className={`navright ${isOpen ? "active":""}`}>
          <ul>
            <Link offset={-80} smooth={true} duration={500} to='hero'>Home</Link>
            <Link offset={-80} smooth={true} duration={500} to='program'>Program</Link>
            <Link offset={-80} smooth={true} duration={500} to='about'>About</Link>
            <Link offset={-80} smooth={true} duration={500} to='campus'>Campus</Link>
            <Link offset={-80} smooth={true} duration={500} to='testimonials'>Testimonials</Link>
        </ul>
        <Link offset={120} smooth={true} duration={500} to='contact'><button>Contact us</button></Link>
        
        </div>
        
    </nav>
  )
}

export default Navbar
