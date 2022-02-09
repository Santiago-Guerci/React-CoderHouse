import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (counter) => {
        console.log(`Tu compra es de ${counter} productos.`);
    }

    return (
        <>
            <h1>{greeting}</h1>
            <p>Próximamente esto mostrará los productos</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;