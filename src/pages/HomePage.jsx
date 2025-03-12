
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero";
import Projects from '../components/Projects';
import Testimonails from '../components/Services';
import About from '../components/About';
import FooterPage from '../pages/FooterPage';


const HomePage = () => {
  return (
    <div>
         <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Testimonails/>
        <FooterPage/>

      
    </div>
  )
}

export default HomePage
