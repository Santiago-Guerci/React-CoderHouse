import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css'

const Cart = () => {
    const {cart, removeItem, clear, getCantidad} = useContext(CartContext);
    console.log(getCantidad());

    return(
        <div>
            <h1 className="cartTitle">Carrito de compras</h1>
            {getCantidad() === 0 ? <Link className='btn btn-warning' to={'/'}>Tu carrito está vacío. Hacé click aca para ver los productos</Link> :

        <div>
            <ul>
                {cart.map((item)=> (
                    <li className='card mb-3 cartProd' key={item.id}>
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img src={item.img} className='cartProdImg' alt={item.name}/>
                            </div>
                            <div className="col-md-9 d-flex justify-content-around align-items-center">
                                <h5 className="card-title">Producto: {item.name}, cantidad: {item.cantidad}</h5>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger m-2">X</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>


            <button onClick={clear} className='btn btn-danger btn-lg m-2'>Limpiar carrito</button>
        </div>
        }

        </div>
    )
}

export default Cart;