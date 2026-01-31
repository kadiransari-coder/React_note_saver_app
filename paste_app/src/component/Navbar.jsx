import React from 'react'
import { NavLink } from 'react-router'

const navbar = () => {
  return (
    <div className='flex flex-row justify-evenly gap-3 p-5'>
    <NavLink to='/'>
      Home
      </NavLink>  
       <NavLink to='/paste'>
     
        Paste
      </NavLink>  
    </div>
  )
}

export default navbar
