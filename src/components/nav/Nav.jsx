import React from 'react'
import './Nav.css'
import HomeOutline from '../../assets/home-outline-white.png'
import About from '../../assets/user-white.png'
import Projects from '../../assets/project-white-icon.png'
import Skills from '../../assets/white-icon-module.png'
import Contact from '../../assets/contact-white-icon.png'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')}className={activeNav === '#home' ? 'active' : ''}><img className='icon' src={HomeOutline} alt="Home"/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><img className='icon' src={About} alt="Home"/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><img className='icon' src={Skills} alt="Home"/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><img className='icon' src={Projects} alt="Home"/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><img className='icon-contact' src={Contact} alt="Home"/></a>
    </nav>
  )
}

export default Nav