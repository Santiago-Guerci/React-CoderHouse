import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
    const {cart} = useContext(CartContext);

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map((item)=> (
                    <li key={item.id}>Producto: {item.name}, cantidad: {item.cantidad}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;