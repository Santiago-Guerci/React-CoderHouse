import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getProducts(categoryId).then(productos => {
            // console.log(productos)
            setProducts(productos)
        })
    }, [categoryId]) //lo que está dentro del corchete es lo que el useEffect está "mirando" a ver si cambia para volver a ejecutarse

    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer;