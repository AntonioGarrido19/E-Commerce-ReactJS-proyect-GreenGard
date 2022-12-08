import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../assets/logo.jpg'
import { useState} from 'react';
import Loading from '../../components/Loading/Loading';

const NavBar = () => {
    const [loading, setLoading] = useState(false);

    const cambiarEstado=()=>{
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
      if(loading){
        return (
          <Loading />
        )
      }else{
    return (

        <div className='menu-navbar-container'>

            <img className='menu-navbar__img' src={logo} alt='logo' />

            <ul className='menu-items'>
            <li>
                    <NavLink to="/" className='menu-list' onClick={()=>cambiarEstado()}>Todos los productos</NavLink>
                </li>
                <li>
                    <NavLink to="/category/flores" className='menu-list' onClick={()=>cambiarEstado()}>Flores</NavLink>
                </li>
                <li>
                    <NavLink to="/category/interior" className='menu-list' onClick={()=>cambiarEstado()}>Interior</NavLink>
                </li>
                <li>
                    <NavLink to="/category/exterior" className='menu-list' onClick={()=>cambiarEstado()}>Exterior</NavLink>
                </li>
            </ul>

           <div> 
            <Link to="/cart" onClick={()=>cambiarEstado()}> <CartWidget/> </Link>
            </div>
        </div>
    )
};
};

export default NavBar