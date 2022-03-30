import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(res => {
            setProduct(res)
        }).catch((err) => {
            alert('Error al obtener el producto', err)
        })
    }, [productId]);

    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;