import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:text-white">
      <Header />
      <Navbar />
      <main className='min-h-screen p-12'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout