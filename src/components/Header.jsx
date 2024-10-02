import React from 'react'
import ThemeBtn from './ThemeBtn'

const Header = () => {
  return (
    <header className='flex justify-end p-2 md:p-3 fixed top-0 w-full z-50'>
       <ThemeBtn /> 
    </header>
  )
}

export default Header