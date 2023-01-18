import React from 'react'

import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    <Footer/>
    </>
  )
}

export default App