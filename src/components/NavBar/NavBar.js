import { Form, Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../assets/logo.jpg'


const NavBar = () => {
    return (

        <div className='menu-navbar-container'>

            <img className='menu-navbar__img' src={logo} alt='logo' />

            <ul className='menu-items'>
            <li>
                    <NavLink to="/" className='menu-list'>Todos los productos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/flores" className='menu-list'>Flores</NavLink>
                </li>
                <li>
                    <NavLink to="/category/interior" className='menu-list'>Interior</NavLink>
                </li>
                <li>
                    <NavLink to="/category/exterior" className='menu-list'>Exterior</NavLink>
                </li>
            </ul>

           <div> 
            <Link to="/cart"> <CartWidget/> </Link>
            </div>
        </div>
    )
}

export default NavBar