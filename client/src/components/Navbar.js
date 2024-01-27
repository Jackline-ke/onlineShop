import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between px-32 py-4'>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='blog'><h1>Blog</h1></Link>
        <Link to='cart'><h1>Cart</h1></Link>
    </div>
  )
}
