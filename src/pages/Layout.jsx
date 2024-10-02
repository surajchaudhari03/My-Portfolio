import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-gradient-to-b from-slate-900 to-slate-800 dark:text-white">
      <Header />
      <Navbar />
      <main className='min-h-screen p-12 py-16 md:py-12'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;