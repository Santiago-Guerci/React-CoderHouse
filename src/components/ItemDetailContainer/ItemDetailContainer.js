import { useState, useEffect } from "react";
import { getProduct } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(producto => {
            // console.log(producto)
            setProduct(producto)
        })
    }, {})

    return (
        //Puedo pasar <ItemDetail objeto={product} /> y en ItemDetail poner de prop ({objeto}) y poner objeto.name, objeto.price, etc
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;