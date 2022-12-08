import {createContext, useState} from 'react';

export const cartContext = createContext([]);

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState ([]);
    const isInCart = (id) => {
        return cart.some((product) => product.id === id );
    }
    const addToCart = (product, quantity) => {
        console.log(isInCart(product.id));
        if(isInCart(product.id)) {
            alert('El producto ya esta en el carrito');
        }else {
        setCart ([...cart, {...product, quantity }])
    }

    
};

    // CREAR FUNCION REMOVEITEMS

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));
    
    const totalProducts = () => cart.reduce ((acc, productoActual)  => acc + productoActual.quantity, 0)

    const clear = () => {
        setCart ([]);
    };
    return (
        <cartContext.Provider value={{cart, addToCart, clear, removeItem, totalProducts}} >
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;