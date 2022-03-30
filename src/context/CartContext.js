import { createContext, useState } from "react";
import { doc, updateDoc, getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from "../services/firebase/firebase";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        //prodToAdd es para poder poner la cantidad como una propiedad de mi objeto a vender (img, name, cantidad)
        const prodToAdd = {...producto, cantidad}
        isInCart(producto.id) ? updateItemInCart(prodToAdd) : addItemToCart(prodToAdd);
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

    const getTotal = () => {
        let valorTotal = 0;
        cart.forEach(p => {valorTotal += p.price * p.cantidad});
        return valorTotal;
    }

    const getCantidad = () => {
        let sumaTotal = 0;
        cart.forEach(p => {sumaTotal += p.cantidad});
        return sumaTotal;
    }

    const reponerStock = () => {
        getDocs(collection(firestoreDb, 'productos')).then(res => {
            res.forEach(prod => {
                updateDoc(doc(firestoreDb, 'productos', prod.id), {stock: 20})
            })
            console.log(`Se repuso el stock por fines educativos`)
        })
    }

    const updateItemInCart = (prodToAdd) => {
        const updatedCart = cart.map(product => {
            if(product.id === prodToAdd.id) {
                const updatedProduct = {...product, cantidad: product.cantidad + prodToAdd.cantidad}
                return updatedProduct;
            } else {
                return product;
            }
        })
        setCart(updatedCart);
    }

    const addItemToCart = (prodToAdd) => {
        setCart([...cart, prodToAdd]);
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getCantidad, getTotal, reponerStock}}> {children} </CartContext.Provider>
    )
}

export default CartContext;