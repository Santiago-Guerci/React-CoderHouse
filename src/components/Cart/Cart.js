import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css'
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";

const Cart = () => {
    const {cart, removeItem, clear, getCantidad, getTotal, reponerStock} = useContext(CartContext);

    const confirmOrder = () => {

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        const objOrder = {
            buyer: {
                name: 'Santiago',
                phone: '1130373577',
                email: 'santiago.38@hotmail.com'
            },
            items: cart,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }
    
        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb, 'productos', prod.id)).then(res => {
                if(res.data().stock >= prod.cantidad) {
                    batch.update(doc(firestoreDb, 'productos', res.id), {
                        stock: res.data().stock - prod.cantidad
                    })
                } else {
                    outOfStock.push({ id: res.id, ...res.data() })
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(firestoreDb, 'orders'), objOrder).then( ({id}) => {
                batch.commit().then(() => {
                    clear()
                    console.log(`La orden fue generada. ID de compra: ${id}`)
                })
            }).catch(err => {
                console.log(`Hubo un error al procesar su pedido`)
            })
        } else {
            outOfStock.forEach(prod => {
                console.log(`El producto ${prod.name} no tiene stock disponible`)
                removeItem(prod.id)
            })
        }

    }

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

                    <button onClick={() => confirmOrder()} className="btn btn-primary btn-lg m-2"> Confirmar Orden </button>
                    <button onClick={clear} className='btn btn-danger btn-lg m-2'>Limpiar carrito</button>
                    <button onClick={reponerStock} className='btn btn-primary btn-lg m-2'>Reponer stock</button>
                </div>
            }

        </div>
    )
}

export default Cart;