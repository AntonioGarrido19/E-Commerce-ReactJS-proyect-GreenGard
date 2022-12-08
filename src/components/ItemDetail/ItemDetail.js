import './ItemDetail.css'
import {useState, useContext} from 'react';
import {cartContext} from '../../Context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productSelected }) => {
  console.log(productSelected);
  const { imageId, title, price, care, info } = productSelected;
  const [count, setCount] = useState (1);
  const {cart, addToCart} = useContext(cartContext);

  return (
    <div className='item__detail__container'>
      <img alt={productSelected.title} src={`/images/${imageId}`}/>
      <div className='item__detail__container--info'>
        <h4>{title}</h4>
        <p>Cuidados: {care}</p>
        <p>Información: {info}</p>
        <p>Precio: ${price}</p>
        <p>{count}</p>
        <ItemCount setCount={setCount} />
        <button onClick={() => addToCart(productSelected, count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
    
  )
}

export default ItemDetail

