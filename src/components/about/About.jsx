import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
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
              <img className='icon' src={MEDAL_ICON} alt='medal'></img>
              <h5> Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <img className='icon' src={USER_ICON} alt='medal'></img>
              <h5> Clients</h5>
              <small>1+ Worldwide</small>
            </article>

            <article className='about__card'>
              <img className='icon' src={PROJECTS_ICON} alt='medal'></img>
              <h5> Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          The sun was shining brightly as Jane stepped outside her house and breathed in the fresh air. 
          She decided to go for a walk in the park to clear her mind and enjoy the beautiful weather. 
          Along the way, she saw several children playing on the swings and heard their laughter and cheers, 
          which brought a smile to her face. She continued walking, taking in her surroundings and feeling grateful 
          for the simple pleasures in life.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About