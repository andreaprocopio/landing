import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import './App.css';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import SuccessAlert from './components/SuccessAlert';
import { useState } from 'react';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';


const App = () => {

  const [alert, setAlert] = useState(false)

  const showAlert = () => {
    setAlert(!alert)
  }

  const closeAlert = () => {
    setAlert(false)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <TechStack />
      <Contact showAlert={showAlert} />
      <AnimatePresence>
        { alert && <SuccessAlert closeAlert={closeAlert} /> }
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App