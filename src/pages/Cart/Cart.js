import './Cart.css'
import { useContext, useState, useEffect } from 'react';
import { cartContext } from "../../Context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment'

const Cart = () => {
    const { cart, removeItem, clear } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    console.log(cart)
    const [ formValues, setFormValues ] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
        );
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'Order');
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        };
        addDoc(query, newOrder)
            .then((response) => {
                alert(`Orden creada con el id ${response.id}`)
                return (response)
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, 'items', product.id);
                    updateDoc(query, {
                        stock: product.stock - product.quantity,
                    })
                })
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getTotalPrice();
    }, [cart])

    const handleInputChange = (event) => {
        console.log(event.target.name)
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    };

    return (
        <div className='cart__container'>
            {cart.map((product) => (
                <div key={product.id} className='cart__container--products'>
                    <img alt={product.title} src={`/images/${product.imageId}`} />

                    <div className='cart__container--products--info'>
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <h4>Cantidad: {product.quantity}</h4>
                    <button onClick={() => removeItem (product.id)}>Quitar producto</button>
                    </div>

                </div>
            ))}

            <div className='cart__container--form'>
                <div className='cart__container--form--input'>
                    <h3>Complete el siguiente formulario para crear su órden de compra:</h3>
                    <input name='name' type='text' placeholder='Nombre' value={formValues.name} onChange={handleInputChange} />
                    <input name='phone' type='text' placeholder='Teléfono' value={formValues.phone} onChange={handleInputChange} />
                    <input name='email' type='text' placeholder='E-mail' value={formValues.email} onChange={handleInputChange} />
                </div>
                <h3>Total de la orden: {total}</h3>
                <button onClick={createOrder}>Crear Orden</button>
                <button onClick={() => clear()}>Limpiar carrito</button>
                
            </div>
        </div>
    )
}

export default Cart;