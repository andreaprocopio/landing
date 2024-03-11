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
      { alert && <SuccessAlert closeAlert={closeAlert} /> }
      <Footer />
    </>
  )
}

export default App