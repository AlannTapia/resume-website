import React from 'react'
import './Footer.css'
import GIT from '../../assets/black-icon-github.png'
import Linked from '../../assets/black-icon-linkedin.png'
import Twitter from '../../assets/black-icon-twitter.png'
import Insta from '../../assets/black-icon-instagram.png'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Alann Tapia</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      
        <a href='https://github.com/AlannTapia'> <img src={GIT} className='footer__icons' alt='github'></img></a>
        <a href='https://www.linkedin.com/in/alanntapia/'> <img src={Linked} className='footer__icons' alt='linked'></img></a>
        <a href='https://twitter.com/AlannDTapia'> <img src={Twitter} className='footer__icons' alt='twitter'></img></a>
        <a href='https://www.instagram.com/alanndtapia/'> <img src={Insta} className='footer__icons' alt='insta'></img></a>
      

      <div className='footer__copyright'>
        <small>&copy; All rights reserved. | Tutorial of Website: <a href='https://www.youtube.com/watch?v=G-Cr00UYokU&t=8437s&ab_channel=EGATOR'>HERE</a> | Icons Used: 
        <a href='https://icons8.com/'> HERE</a></small>
      </div>
    </footer>
  )
}

export default Footer