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

    const removeItem = (value) => {
        const filteredCart = cart.filter(p => p.id !== value);
        setCart(filteredCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id);
    }

    //Voy item por item aplicando que si el id es igual, le sumo cantidad
    const sumarCantidad = (id, cantidad) => {
        cart.map((producto) => producto.id === id && (producto.cantidad += cantidad));
    }

    const getCantidad = () => {
        let sumaTotal = 0;
        cart.forEach(p => {sumaTotal += p.cantidad});
        return sumaTotal;
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getCantidad}}> {children} </CartContext.Provider>
    )
}

export default CartContext;