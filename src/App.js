import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import GitHub from './components/Github'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Projects/>
      <GitHub/>
      <Contact/>
    </div>
  )
}

export default App
