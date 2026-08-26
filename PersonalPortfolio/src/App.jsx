import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'  
import RetroBackground, { RetroNavBar } from './components/RetroBackground.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
// import Navbar from './components/Navbar.jsx'




function App() {

 return (
    <RetroBackground theme="dimblue">
      <RetroNavBar />
      <main style={{ padding: "24px 32px" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </main>
    </RetroBackground>
  )
}

export default App
