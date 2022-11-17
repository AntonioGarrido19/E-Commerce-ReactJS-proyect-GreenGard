
import React from 'react'

const ItemDetail = ({productSelected}) => {
  console.log(productSelected);
  const {img, title, category, price} = productSelected;
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `${img}`} />
      <h4>{title}</h4>
      <h4>{category}</h4>
     
    </div>
  )
}

export default ItemDetail

