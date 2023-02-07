import React from 'react'

import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Experience from './components/experience/Experience'
/*
import Testimonials from './components/testimonials/Testimonials'

*/

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Blog />
    <Contact />
    <Footer />
    <Footer/>
    </>
    /*
    <Services />
    <Testimonials />
    */
  )
}

export default App