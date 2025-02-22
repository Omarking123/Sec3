import React from 'react'
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className=' bg-emerald-400 p-3 '>
    
    <div className='flex items-center container  mx-auto justify-between'>


    <div className='flex items-center gap-3'>


<span>Logo</span>

<ul className='flex items-center space-x-4'>

<li>
  <NavLink to="/Products">Products</NavLink>
</li>

<li>
  <NavLink to="/">Categories</NavLink>
</li>

<li>
  <NavLink to="/">Cart</NavLink>
</li>
  
</ul>
</div>


<div className='flex items-center gap-3 '>
  <ul className=' '>
    <li className=' flex  gap-3 ' >
      <i className='fa-brands cursor-pointer fa-facebook-f'></i>
      <i className='fa-brands cursor-pointer fa-twitter'></i>
      <i className='fa-brands cursor-pointer fa-behance'></i>
      <i className='fa-brands cursor-pointer fa-linkedin'></i>
    </li>
  </ul>
  <ul className='flex items-center  gap-2 '>
<li>
<NavLink to='/Register'>Register</NavLink>
</li>
<li>
<NavLink to='/Login'>Login</NavLink>
</li>
<li>
<span className=' cursor-pointer '>Logout</span>
</li>
</ul>

</div>


      
    </div>
    
    
    </nav>
  )
}
