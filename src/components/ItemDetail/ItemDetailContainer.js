import { useState, useEffect } from "react";
import { getProduct } from "../../asyncmock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct().then(producto => {
            console.log(producto)
            setProduct(producto)
        })
    }, {})

    return (
        <ItemDetail objeto={product}/>
    )
}

export default ItemDetailContainer;