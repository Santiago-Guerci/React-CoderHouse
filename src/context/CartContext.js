import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        //newObj es para poder poner la cantidad como una propiedad de mi objeto a vender (img, name, cantidad)
        const prodQty = {...producto, cantidad}

        if(isInCart(producto.id)){
            console.log('hay que sumar cantidad')
            sumarCantidad(producto.id, cantidad);
        } else {
            setCart([...cart, prodQty]);
        }
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter(p => p.id !== id);
        setCart(filteredCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id);
    }

    const sumarCantidad = (id, cantidad) => {
        cart.map((producto) => producto.id === id && (producto.cantidad += cantidad));
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}> {children} </CartContext.Provider>
    )
}

export default CartContext;