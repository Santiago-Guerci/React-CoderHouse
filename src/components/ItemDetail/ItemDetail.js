const ItemDetail = ({objeto}) => {
    return(
        <div className="card itemCard">
            <img src={objeto.img} className="card-img-top" alt={objeto.name}/>
            <div className="card-body">
                <h5 className="card-title">{objeto.name}</h5>
                <p className="card-text">{objeto.detail}</p>
                <p className="card-text">Precio de lista: ${objeto.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;