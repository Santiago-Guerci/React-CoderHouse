import { useState } from 'react'


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

    return(
        <div>
            <div className='d-flex justify-content-center'>
                {/* En el onClick uso las arrowFunction para ejecutar una función de callback */}
                <button className='btn btn-secondary m-2' onClick={()=> restar()}>-</button>
                <h4>{counter}</h4>
                <button className='btn btn-secondary m-2' onClick={()=> sumar()}>+</button>
            </div>
            <button className='btn btn-success' onClick={()=> onAdd(counter)}>Agregar al carrito</button>
        </div>
    )   
}

export default ItemCount;