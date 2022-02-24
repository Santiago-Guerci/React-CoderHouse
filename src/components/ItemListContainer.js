import { useEffect, useState } from 'react';
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts } from '../asyncmock';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getProducts(categoryId).then(productos => {
            console.log(productos)
            setProducts(productos)
        })
    }, [categoryId])

    // const onAdd = (counter) => {
    //     console.log(`Tu compra es de ${counter} productos.`);
    // }

    return (
        <>
            <h1 className='titulo'>{greeting}</h1>
            {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer;