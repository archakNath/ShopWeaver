import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Customisation from './pages/Customisation'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/appearance/customisation" element={<Customisation />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
