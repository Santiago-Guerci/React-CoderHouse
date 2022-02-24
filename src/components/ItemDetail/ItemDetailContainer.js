import { useState, useEffect } from "react";
import { getProduct } from "../../asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(producto => {
            console.log(producto)
            setProduct(producto)
        })
    }, {})

    return (
        <ItemDetail objeto={product}/>
    )
}

export default ItemDetailContainer;