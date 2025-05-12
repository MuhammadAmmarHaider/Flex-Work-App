import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useSelector } from 'react-redux';
import AdminNav from './pages/Admin/AdminNav';
import { LiveChatWidget } from '@livechat/widget-react';

function App() {
  const userRole = useSelector((state) => state.user.role);

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {userRole === 'admin' ? <AdminNav /> : <Navbar />}
      <Outlet />
      <Footer />
      <LiveChatWidget
        license="12345678"
        visibility="minimized"
      />
    </div>
  )
}

export default App
