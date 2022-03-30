import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firebase';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {

        getProducts(categoryId).then(res => {
            setProducts(res)
        }).catch((err) => {
            alert('Error al obtener los productos', err)
        })

    }, [categoryId])

    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer;