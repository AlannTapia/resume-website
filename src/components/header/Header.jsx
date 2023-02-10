import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/alann-1-rmv-bg-cropped.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id='home'>
      <header> 
        <div className="container header__container">
          <h5> Hello I'm</h5>
          <h1>Alann Tapia</h1>
          <h5 className="text-light"> Software Developer</h5>
          <CTA />
          <HeaderSocials />
          
          <div className='me'>
            <img src={ME} alt="me" />
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )
}

export default Header