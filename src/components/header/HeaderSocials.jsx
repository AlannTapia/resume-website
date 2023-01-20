import React from 'react'
import './HeaderSocials.css'
import GIT from '../../assets/icons8-github-50.png'
import Linked from '../../assets/icons8-linkedin-50.png'

const HeaderSocials = () => {
  /*console.log('HeaderSocials component is rendered') */
  console.log(HeaderSocials)
  return (
    <div className='hs'>
        <a href='https://github.com' target="_blank" rel="noreferrer">
            <img src={GIT} />
        </a>
        
        <a href='linkedin.com' target="_blank" rel="noreferrer">
            <img src={Linked} />
        </a>
    </div>
  )
}

export default HeaderSocials