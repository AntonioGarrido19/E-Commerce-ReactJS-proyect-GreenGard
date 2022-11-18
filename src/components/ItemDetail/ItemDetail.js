import './ItemDetail.css'

const ItemDetail = ({productSelected}) => {
  console.log(productSelected);
  const {img, title, category, price, care, info} = productSelected;
  return (
    <div className='item__detail__container'> 
    
      <img src={process.env.PUBLIC_URL + `${img}`} />
      <div className='item__detail__container--info'>
      <h4>{title}</h4>
      <p>Cuidados: {care}</p>
      <p>Información: {info}</p>
      <p>Precio: ${price}</p>
      <div className='item__detail__container--button'>
      <button>Agregar</button>
      <p>0</p>
      <button>Quitar</button>
      </div>
      </div>
    </div>
  )
}

export default ItemDetail

