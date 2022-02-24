import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return(
        <div className="card itemCard">
            <img src={item.img} className="card-img-top" alt={item.name}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/detail/${item.id}`} className="btn btn-primary" >Ver detalles </Link>
            </div>
        </div>
    )
}

export default Item;