import { useState, useEffect } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const restar = () => {
        if(counter > initial) {
            setCounter(counter - 1);
        }
    }

    const sumar = () => {
        if(counter < stock) {
            setCounter(counter + 1);
        }
    }

    return (
        <div>
            <h3>Mi producto</h3>
            <div className='d-flex justify-content-center'>
                <button onClick={restar}>-</button>
                <h4>{counter}</h4>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button> 
        </div>
    );
}

export default ItemCount;