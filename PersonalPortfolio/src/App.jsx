import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'  
import RetroBackground from './components/RetroBackground.jsx'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'





function App() {

 return (
    <RetroBackground theme="dimblue">
      <main style={{ padding: "24px 32px" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </main>
    </RetroBackground>
  )
}

export default App
