import React from 'react'
import './style.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <span>Contact Keeper</span>
            <ul className='navUl'>
                <li>
                    <a href='/'>Home</a>
                    
                </li>
                <li>
                    <a href='/about'>About</a>
                    
                </li>
                <li>
                    <a href='/register'>Register</a>
                    
                </li>
                <li>
                    <a href='/login'>
                        Login
                    </a>
                    
                </li>
            </ul>
        </div>
    )
}
