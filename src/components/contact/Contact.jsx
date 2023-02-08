import React from 'react'
import './Contact.css'
import ICON_MAIL from '../../assets/icon-mail.png'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <img src={ICON_MAIL} className='icon__contacts' alt='email icon'></img>
            <h4>Email</h4>
            <h5>dummygator@gmail.com</h5>
            <a href='mailto:dummyegator@gmail.com' target="_blank" rel="noreferrer" >Send a message</a>
          </article>     
          <article className='contact__option'>
            <img src={ICON_MAIL} className='icon__contacts' alt='email icon'></img>
            <h4>Messenger</h4>
            <h5>egatordummy</h5>
            <a href='mailto:dummyegator@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>        
          <article className='contact__option'>
            <img src={ICON_MAIL} className='icon__contacts' alt='email icon'></img>
            <h4>Instagram</h4>
            <h5>dummygator@gmail.com</h5>
            <a href='mailto:dummyegator@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact