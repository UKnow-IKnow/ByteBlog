import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element= {<Home />} />
        <Route path='/signin' element= {<SignIn />} />
        <Route path='/signup' element= {<SignUp />} />
        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/about' element= {<About />} />
        <Route path='/projects' element= {<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

