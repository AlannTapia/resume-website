import React from 'react'
import './Experience.css'
import VERIFIED_ICON from '../../assets/verified-icon.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-End Development</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div> 
                    <h4>HTML</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>                   
                    <h4>Javascript</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>XML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
            </div>
        </div>
        <div className='experience__backend'>
        <h3>Back-End Development</h3>
        <div className='experience__content'>
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div> 
                    <h4>C++ / C</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>Java</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>                   
                    <h4>Python</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>SQL</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article> 
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>Flask</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <img className='verified_icon' src={VERIFIED_ICON} alt='icon'></img>
                  <div>
                    <h4>MATLAB</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience