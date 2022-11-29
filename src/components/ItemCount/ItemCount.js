
const ItemCount = ({setCount}) => {
  return (
    <div>
        <button onClick={() => setCount((currentValue) => currentValue + 1 )}>Agregar al carrito</button>
        <button onClick={() => setCount((currentValue) => currentValue - 1)}> Quitar del carrito</button>
    </div>
  )
}

export default ItemCount