import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../assets/logo.jpg'

const NavBar = () => {
    return (

        <div className='menu-navbar-container'>

            <img className='menu-navbar__img' src={logo} alt='logo' />

            <ul className='menu-items'>
                <li>
                    <a href="" className='menu-list'>Flores</a>
                </li>
                <li>
                    <a href="" className='menu-list'>Interior</a>
                </li>
                <li>
                    <a href="" className='menu-list'>Exterior</a>
                </li>
                <li>
                    <a href="" className='menu-list'>Contacto</a>
                </li>
            </ul>

            <CartWidget />
        </div>
    )
}

export default NavBar