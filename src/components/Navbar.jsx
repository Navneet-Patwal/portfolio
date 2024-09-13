import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className="h-10 rounded-lg bg-white justify-center
        items-center flex font-bold shadow-md">
        <p className='blue-gradient_text max-md:hidden ml-2 mr-2'>Navneet Patwal</p>
        <p className='w-10 ml-4 blue-gradient_text sm:hidden'>NP</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive})=> isActive?
            'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive})=> isActive?
            'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav> 
    </header>
  )
}

export default Navbar
