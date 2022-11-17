import React from 'react'
import cart from'../../assets/shopping-cart.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__cart'>
        <img className='menu-navbar__cart__img' src={cart} alt='cart-widget'/>
        <div>
          <p>0</p>
        </div>
    </div>
  )
}

export default CartWidget