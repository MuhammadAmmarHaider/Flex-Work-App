import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
