import React from 'react'
import './Contact.css'
import ICON_MAIL from '../../assets/icon-mail.png'
import Twit from '../../assets/icons8-twitter-511.png'
import Insta from '../../assets/icons8-instagram-51.png'
import ME from '../../assets/alann-4.jpg'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <img src={ICON_MAIL} className='icon__contacts' alt='email icon'></img>
            <h4>Email:</h4>
            <h5>alanntapia.business@gmail.com</h5>
            <a href='mailto:alanntapia.business@gmail.com' target="_blank" rel="noreferrer" >Send a message</a>
          </article>     
          <article className='contact__option'>
            <img src={Twit} className='icon__contacts' alt='email icon'></img>
            <h4>Twitter DM's: </h4>
            <h5>AlannTapia</h5>
            <a href='https://twitter.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>        
          <article className='contact__option'>
            <img src={Insta} className='icon__contacts' alt='email icon'></img>
            <h4>Instagram DM's:</h4>
            <h5>AlannTapia</h5>
            <a href='mailto:dummyegator@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        <div className="about__me_contact">
          <div className='about__me_contact-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        
        
      </div>
    </section>
  )
}

export default Contact