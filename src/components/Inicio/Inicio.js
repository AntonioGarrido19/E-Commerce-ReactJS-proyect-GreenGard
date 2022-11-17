
import './Inicio.css'
import { data } from '../../data/data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { resolvePath, useParams } from 'react-router-dom';


const Inicio = (props) => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if (categoryName) {
        const filtereddata = data.filter((producto) => {
          return producto.category === categoryName
        });
        res(filtereddata)
      } else {
        res(data);
      }
    }, 1000);
  })

  useEffect(() => {
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
}, [categoryName]);

return (
  <div className='message-greeting-container'>
    <h2 className='message'>{props.name}</h2>
    <div className='item__list--container'>
      <ItemList products={items} />
    </div>
  </div>
);
};


export default Inicio