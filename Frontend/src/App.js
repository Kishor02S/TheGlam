import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import Footer from './Components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
