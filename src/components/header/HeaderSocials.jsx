import React from 'react'
import './HeaderSocials.css'
import GIT from '../../assets/icons8-github-51.png'
import Linked from '../../assets/icons8-linkedin-51.png'
import Twitter from '../../assets/icons8-twitter-511.png'
import Insta from '../../assets/icons8-instagram-51.png'

const HeaderSocials = () => {
  return (
    <div className='hs-container'>
      <div className='hs'>
        <a href='https://github.com/AlannTapia' target="_blank" rel="noreferrer">
          <img src={GIT} alt = 'Hi' />
        </a>
      </div>
      <div className='hs'>
        <a href='https://www.linkedin.com/in/alanntapia/' target="_blank" rel="noreferrer">
          <img src={Linked} alt = 'Hi'/>
        </a>
      </div>
      <div className='hs'>
        <a href='https://twitter.com/AlannDTapia' target="_blank" rel="noreferrer">
          <img src={Twitter}alt = 'Hi' />
        </a>
      </div>
      <div className='hs'>
        <a href='https://www.instagram.com/alanndtapia/' target="_blank" rel="noreferrer">
          <img src={Insta} alt = 'Hi' />
        </a>
      </div>
    </div>
  )
}

export default HeaderSocials