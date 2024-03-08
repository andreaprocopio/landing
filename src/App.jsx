import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsGrid />
    </>
  )
}

export default App