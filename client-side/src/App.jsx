import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRoute>
  )
}
