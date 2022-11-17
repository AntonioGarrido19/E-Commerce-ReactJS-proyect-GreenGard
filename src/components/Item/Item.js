import './Item.css'
import {Link} from 'react-router-dom';

const Item = ({product}) => {
const {img, title, price} = product;

  return (
    <div className='itemsContainer'>
       <img src={process.env.PUBLIC_URL + `${img}`} />
         <h4>{title}</h4>
         <p>Precio: ${price}</p>

       <Link to={`item/${product.id}`}> 
       <button>Ver mas</button> 
       </Link>
    </div>
 

  );
};

export default Item