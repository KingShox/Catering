import React from 'react'
import '../CSS/Header.css'

const Header = () => {
  return (
    <div className=' header-nav justify-between'>
        
            <h1 className='center'>Uzbek Go Inc.</h1>
        
        <div className='center gap-links'>
            <a className='anchor-info' href='/'>Home</a>
            <a className='anchor-info' href='/about-us'>About Us</a>
            <a className='anchor-info' href='/menu'>Menu</a>
            <a className='anchor-info' href='/contact-us'>Contact Us</a>
        </div>
        <div className='center gap'>
            <a className='anchor-info' href='/sign-in'>Sign In</a>
            <a className='anchor-info' href='/sign-up'>Sign Up</a>

        </div>
    </div>
  )
}

export default Header