import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemDetail = ({img, name, detail, price, stock}) => {
    const [cantidad, setCantidad] = useState(0);

    const handleAdd = (counter) => {
        console.log(`realice compra de ${counter} items`);
        setCantidad(counter);
    }

    return(
        <div className="card itemCard">
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail}</p>
                <p className="card-text">Precio de lista: ${price}</p>
                {cantidad === 0 ? <ItemCount stock={stock} initial={1} onAdd={handleAdd}/> : <Link to={'/cart'}>Ir al carrito </Link>}

                {/* <ItemCount stock={stock} initial={1} onAdd={handleAdd}/> */}
            </div>
        </div>
    )
}

export default ItemDetail;