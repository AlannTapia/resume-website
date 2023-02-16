import React from 'react'
import SmoothScroll from 'smooth-scroll'

import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio'

import Experience from './components/experience/Experience'
/*
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
*/

const App = () => {

  React.useEffect(() => { new SmoothScroll('a[href*="#"]', {speed: 800}); }, []);
    
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
    /*
    <Services />
    <Testimonials />
    */
  )
}

export default App