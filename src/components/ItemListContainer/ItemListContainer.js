import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'productos'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'productos');

        getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot);
            const productos = querySnapshot.docs.map(doc => {
                console.log(doc);
                return { id: doc.id, ...doc.data()}
            })
            console.log(productos);
            setProducts(productos);
        })

    }, [categoryId])
    
    // CON ASYNCMOCK
    // useEffect(() => {
    //     getProducts(categoryId).then(productos => {
    //         // console.log(productos)
    //         setProducts(productos)
    //     })
    // }, [categoryId]) //lo que está dentro del corchete es lo que el useEffect está "mirando" a ver si cambia para volver a ejecutarse

    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer;