import './Item.css'
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const Item = ({product}) => {
const {imageId, title, price} = product;

  return (
    <div className='itemsContainer'>
       <img alt={product.title} src={`images/${imageId}`}/>
         <h4>{title}</h4>
         <p>Precio: ${price}</p>
       <Link to={`item/${product.id}`}> 
       <button>Ver mas</button> 
       </Link>
    </div>
  );
};





export default Item