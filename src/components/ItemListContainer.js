import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts } from '../asyncmock';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(productos => {
            console.log(productos)
            setProducts(productos)
        })
    }, [])

    const onAdd = (counter) => {
        console.log(`Tu compra es de ${counter} productos.`);
    }

    console.log(products);

    return (
        <>
            <h1>{greeting}</h1>
            <p>Próximamente esto mostrará los productos</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            {/* <ul>
                {products.map(product => {
                    return <li key={product.id}>{product.name}</li>
                })}
            </ul> */}
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer;