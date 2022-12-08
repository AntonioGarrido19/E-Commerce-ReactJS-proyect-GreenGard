import './ItemCount.css'

const ItemCount = ({ setCount }) => {
  const addItem = () => {
    setCount((currentValue) => currentValue + 1);
  };
  const removeItem = () => {
    setCount ((currentValue) => {
      if (currentValue > 1) {
        return currentValue - 1;
      }else {
        return currentValue;
      }
    });
  };
  return (
    <div className="button__container">
       <button onClick={removeItem}>Quitar</button>
        <button onClick={addItem}>Agregar</button>
       
    </div>
  )
}

export default ItemCount;