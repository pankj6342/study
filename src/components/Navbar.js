import React from 'react'
import './styles/Navbar.css'
function Navbar() {
  return (
    <nav className='fixed flex flex-col justify-items-center content-center text-center top-0 left-0 h-screen w-48 bg-green-400'>
        <div><img className='w-20 h-20' src="https://cdn.codechef.com/sites/default/files/uploads/pictures/9add8f5b7067a81164b7a9116b1dcb79.jpg" alt="" /></div>
        <div className='nav-ele'><a href="/dashboard">Dashboard</a></div>
        <div className='nav-ele'><a href="/profile">Profile</a></div>
        <div className='nav-ele'><a href="/disscussions">Disscussions</a></div>
        <div className='nav-ele'><a href="/puzzles">Puzzles</a></div>
    </nav>
  )
}

export default Navbar