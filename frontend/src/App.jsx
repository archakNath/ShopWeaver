import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Customisation from './pages/Customisation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customisation" element={<Customisation />} />
    </Routes>
  )
}

export default App
