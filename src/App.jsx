import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
