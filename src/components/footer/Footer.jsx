import React from 'react'
import './Footer.css'
import GIT from '../../assets/icons8-github-51.png'
import Linked from '../../assets/icons8-linkedin-51.png'
import Twitter from '../../assets/icons8-twitter-511.png'
import Insta from '../../assets/icons8-instagram-51.png'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      
        <a href='https://github.com'> <img src={GIT} className='footer__icons' alt='github'></img></a>
        <a href='https://linkedin.com'> <img src={Linked} className='footer__icons' alt='linked'></img></a>
        <a href='https://twitter.com'> <img src={Twitter} className='footer__icons' alt='twitter'></img></a>
        <a href='https://instagram.com'> <img src={Insta} className='footer__icons' alt='insta'></img></a>
      

      <div className='footer__copyright'>
        <small>&copy; All rights reserved. | Tutorial of Website: <a href='https://www.youtube.com/watch?v=G-Cr00UYokU&t=8437s&ab_channel=EGATOR'>HERE</a></small>
      </div>
    </footer>
  )
}

export default Footer