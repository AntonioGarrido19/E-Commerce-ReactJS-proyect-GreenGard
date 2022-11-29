import './ItemDetail.css'
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productSelected }) => {
  console.log(productSelected);
  const { img, title, price, care, info } = productSelected;
  const {count, setCount} = useState (0);
  return (
    <div className='item__detail__container'>

      <img src={process.env.PUBLIC_URL + `${img}`} />
      <div className='item__detail__container--info'>
        <h4>{title}</h4>
        <p>Cuidados: {care}</p>
        <p>Información: {info}</p>
        <p>Precio: ${price}</p>
        <p>{count}</p>
        <ItemCount setCount={setCount}/>
      </div>
    </div>
    
  )
}

export default ItemDetail

