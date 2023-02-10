import React from 'react'
import './About.css'
import ME from '../../assets/alann-3.jpg'
import MEDAL_ICON from '../../assets/medal-icon.png'
import USER_ICON from '../../assets/icon-users.png'
import PROJECTS_ICON from '../../assets/icon-projects.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <img className='icon_about' src={MEDAL_ICON} alt='medal'></img>
              <h5> Experience</h5>
              <small>0-2 Years</small>
            </article>

            <article className='about__card'>
              <img className='icon_about' src={USER_ICON} alt='medal'></img>
              <h5> Network</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <img className='icon_about' src={PROJECTS_ICON} alt='medal'></img>
              <h5> Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
          I recently graduated with a degree in Computer Science and Engineering from UCM in December 2022 and I'm absolutely thrilled to launch my career. 
          I'm passionate about coding and robotics, and I'm looking forward to working with the latest technology and creating 
          unique solutions to difficult problems. I'm sure that with my skill set and experience, I'm capable of making a significant 
          contribution to the software engineering sector. I'm ready to get started and make an impact!
          for the simple pleasures in life.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About