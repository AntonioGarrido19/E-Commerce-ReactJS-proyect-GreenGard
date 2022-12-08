import './Item.css'
import {Link} from 'react-router-dom';
import { useState} from 'react';
import Loading from '../../components/Loading/Loading';

const Item = ({product}) => {
const [loading, setLoading] = useState(false);
const {imageId, title, price, stock} = product;

const cambiarEstado=()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }
  if(loading){
    return (
      <Loading />
    )
  }else{
  return (
    <div className='itemsContainer'>
       <img alt={product.title} src={`/images/${imageId}`}/>
         <h5>{title}</h5>
         <p>Precio: ${price}</p>
         <p>En stock: {stock}</p>
       <Link to={`item/${product.id}`} onClick={()=>cambiarEstado()} > 
       <button>Ver mas</button> 
       </Link>
    </div>
  );
};
};

export default Item