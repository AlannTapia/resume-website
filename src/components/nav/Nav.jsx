import React from 'react'
import './Nav.css'
import HomeOutline from '../../assets/home-outline-white.png'
import About from '../../assets/user-white.png'
import Projects from '../../assets/project-white-icon.png'
import Blog from '../../assets/blog-white-icon-11.png'
import Contact from '../../assets/contact-white-icon.png'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><img className='icon' src={HomeOutline} alt="Home"/></a>
      <a href="#about"><img className='icon' src={About} alt="Home"/></a>
      <a href="#experience"><img className='icon' src={Projects} alt="Home"/></a>
      <a href="#services"><img className='icon' src={Blog} alt="Home"/></a>
      <a href="#contact"><img className='icon-contact' src={Contact} alt="Home"/></a>
    </nav>
  )
}

export default Nav