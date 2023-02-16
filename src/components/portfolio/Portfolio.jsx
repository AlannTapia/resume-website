import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/studbud-img.jpg'
import IMG2 from '../../assets/tree_detection_img.jpg'
import IMG3 from '../../assets/android_app-img.jpg'
import IMG4 from '../../assets/hand-eye-img.jpg'
import IMG5 from '../../assets/react-website-img.jpg'
import IMG6 from '../../assets/current.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className= "container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt='img1'></img>
          </div>
          <h3>"Stud Bud" Hackathon Web Application</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/AlannTapia' className='btn'>Github</a>
            <a href='https://hackmerced-vii.devpost.com/' className='btn btn-primary' target="_blank" rel="noreferrer">Devpost</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG2} alt='img1'></img>
          </div>
          <h3>Tree Detection Web Application</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/atapia209/Tree_Project_Group307' className='btn'>Github</a>
            <a href='https://innovatetogrow.ucmerced.edu/' className='btn btn-primary' target="_blank" rel="noreferrer">Innovate2Grow</a>
          </div>
        </article><article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG3} alt='img1'></img>
          </div>
          <h3>Android Tree Database Application</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/atapia209/CSE111_Project' className='btn'>Github</a>
            <a href='https://github.com/atapia209/CSE111_Project' className='btn btn-primary' target="_blank" rel="noreferrer">Download</a>
          </div>
        </article><article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG4} alt='img1'></img>
          </div>
          <h3>Robotic Hand and Eye Mechanism</h3>
          <div className='portfolio__item-cta'>
            {/* <a href='https:github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a> */}
          </div>
        </article><article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG5} alt='img1'></img>
          </div>
          <h3>React Website Portfolio</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/AlannTapia/resume-website' className='btn'>Github</a>
            <a href='#home' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG6} alt='img1'></img>
          </div>
          <h3>Currently: React Inventory Website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/AlannTapia' className='btn'>Github</a>
            {/* <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a> */}
          </div>
        </article>
    
    </div>
    </section>
  )
}

export default Portfolio