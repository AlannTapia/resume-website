import React from 'react'

import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
/*
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
*/

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Blog />
    <Contact />
    <Footer />
    <Footer/>
    </>
    /*
    <Experience />
    <Services />
    <Testimonials />
    */
  )
}

export default App