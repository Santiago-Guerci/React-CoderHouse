import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

const ItemDetail = ({id, img, name, detail, price, stock}) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(CartContext);
    
    const handleAdd = (counter) => {
        setCantidad(counter);

        const productToAdd = {id, img, name, detail, price, stock};
        addItem(productToAdd, counter);
    }

    return(
        <div className="card itemCard">
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail}</p>
                <p className="card-text">Precio de lista: ${price}</p>
                {cantidad === 0 ? <ItemCount stock={stock} initial={1} onAdd={handleAdd}/> : <Link to={'/cart'}>Ir al carrito</Link>}
            </div>
        </div>
    )
}

export default ItemDetail;