import './Item.css'

const Item = ({item}) => {
    return(
        <div className="card itemCard">
            <img src={item.img} className="card-img-top" alt={item.detail}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
            </div>
        </div>
    )
}

export default Item;