import React from 'react'
import ThemeBtn from './ThemeBtn'

const Header = () => {
  return (
    <header className='flex justify-end p-4 fixed top-0 w-full'>
       <ThemeBtn /> 
    </header>
  )
}

export default Header