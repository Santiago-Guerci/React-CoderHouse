import { useContext, useState } from "react";
import Form from "../Form/Form";
import OrderDetail from "../OrderDetail/OrderDetail";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css'
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase";

const Cart = () => {
    const {cart, removeItem, clear, getCantidad, getTotal, reponerStock} = useContext(CartContext);
    const [success, setSuccess] = useState(false);

    const [contact, setContact] = useState({
        name: '',
        surname: '',
        email: '',
        phone: ''
    });

    const [show, setShow] = useState(false);

    const changeShow = () => {
        setShow(!show);
    }

    const confirmOrder = () => {
            
            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []
        
            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'productos', prod.id)).then(res => {
                    if(res.data().stock >= prod.cantidad) {
                        batch.update(doc(firestoreDb, 'productos', res.id), {
                            stock: res.data().stock - prod.cantidad
                        })
                    } else {
                        outOfStock.push({ id: res.id, ...res.data() })
                    }
                }).catch((err) => {
                    console.log(err);
                }).then(() => {
                    executeOrder();
                })
            })

            const executeOrder = () => {
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then( ({id}) => {
                        batch.commit().then(() => {
                            setSuccess(true);
                            clear()
                            console.log(`La orden fue generada. ID de compra: ${id}`)
                        })
                    }).catch(err => {
                        console.log(`Hubo un error al procesar su pedido`)
                    })
                } else {
                    console.log(`El producto ${outOfStock[0].name} no tiene stock suficiente.`);
                    outOfStock.forEach(prod => {
                        console.log(`El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })
                }
            }
            

    }

    return(
        <div className="container p-4">
            {success ? 
                <div className="container">
                    <h1 className="cartTitle">Gracias por su compra</h1>
                    <button onClick={() => setSuccess(false)}>
                        <Link className='btn btn-warning' to={'/'}>Generar otra compra</Link>
                    </button> 
                </div>
            :
                <div className="container">
                    {getCantidad() === 0 ?
                        <div>
                            <h2>No hay productos</h2>
                            <Link className='btn btn-warning' to={'/'}>Volver al inicio</Link>
                        </div> 
                    :
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
                            
                            {show ? <OrderDetail contact={contact}/> : <Form setContact={setContact} changeShow={changeShow}/>}

                            <h3>Total: ${getTotal()}</h3>
                            <button onClick={() => changeShow()} className="btn btn-primary btn-lg m-2">Cambiar Show</button>
                            <button onClick={() => confirmOrder()} className="btn btn-primary btn-lg m-2"> Confirmar Orden </button>
                            <button onClick={clear} className='btn btn-danger btn-lg m-2'>Limpiar carrito</button>
                            <button onClick={reponerStock} className='btn btn-primary btn-lg m-2'>Reponer stock</button>

                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Cart;