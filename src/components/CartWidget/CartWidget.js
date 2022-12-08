import React from 'react'
import cart from'../../assets/shopping-cart.png'
import './CartWidget.css'
import { useContext} from 'react';
import { cartContext } from "../../Context/CartProvider";

const CartWidget = () => {
  const {totalProducts} = useContext(cartContext);
  return (
    <div className='menu_navbar__cart'>
        <img className='menu-navbar__cart__img' src={cart} alt='cart-widget'/>
        <div>
          <span>{totalProducts() || ''}</span> 
        </div>
    </div>
  )
}

export default CartWidget