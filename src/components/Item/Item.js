import './Item.css'

const Item = ({product}) => {
  console.log(product.image)
  return (
    <div className='itemsContainer'>
        <img src={product.image} />
       <div className='itemsContainer__info'>
         <h2>{product.title}</h2>
         <p>{product.price}</p>
        </div>
    </div>

  );
};

export default Item