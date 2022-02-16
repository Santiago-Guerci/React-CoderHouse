import Item from "./Item/Item";

const ItemList = ({items = []}) => {
    return(
        <div className="itemsContainer">
            {items.map((product) => (
                <Item item={product} key={product.id} />
            ))}
        </div>
    )
}

export default ItemList;