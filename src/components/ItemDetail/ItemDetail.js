import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({img, name, detail, price, stock}) => {

    const handleAdd = (counter) => {
        console.log(`realice compra de ${counter} items`);
    }

    return(
        <div className="card itemCard">
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail}</p>
                <p className="card-text">Precio de lista: ${price}</p>
                <ItemCount stock={stock} initial={1} onAdd={handleAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;