
import './Inicio.css'
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const Inicio = () => {
 
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  
  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    if (categoryName) {
      const queryFilter = query(querySnapshot, where('categoryId', '==', categoryName))
      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((item) => {
          console.log(item.data())
          return { id: item.id, ...item.data() }
        });
        console.log(data);
        setItems(data);
      })
        .catch((error) => { console.log(error) })
    } else {

      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((item) => {
          console.log(item.data())
          return { id: item.id, ...item.data() }
        });
        setItems(data);
      })
        .catch((error) => { console.log(error) })
    };
  }
  useEffect(() => {
    getProducts();
  }, [categoryName]);

  //   useEffect(() => {
  //     getProducts
  //       .then((res) => setItems(res))
  //       .catch((error) => console.log(error));
  // }, [categoryName]);

  return (
    <div className='message-greeting-container'>
      <div className='item__list--container'>
        <ItemList products={items} />
      </div>
    </div>
  );
};


export default Inicio
export function data() {};
