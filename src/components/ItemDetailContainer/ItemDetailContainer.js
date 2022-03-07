import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        const docRef = doc(firestoreDb, 'productos', productId);

        getDoc(docRef).then(response => {
            const producto = { id: response.id, ...response.data()}
            setProduct(producto)
        })
    }, [productId]);

    // CON ASYNCMOCK
    // useEffect(() => {
    //     getProduct(productId).then(producto => {
    //         // console.log(producto)
    //         setProduct(producto)
    //     })
    // }, [{}])

    return (
        //Puedo pasar <ItemDetail objeto={product} /> y en ItemDetail poner de prop ({objeto}) y poner objeto.name, objeto.price, etc
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;