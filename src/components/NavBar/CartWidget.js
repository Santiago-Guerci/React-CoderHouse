import { Link } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getCantidad } = useContext(CartContext)

    return (
        <div className="cartDiv">
            <Link to={'/cart'}>
                <img src="https://cdn-icons-png.flaticon.com/512/869/869104.png" alt="cartIcon" className="cartIcon"/>
                {getCantidad()}
            </Link>
        </div>
    )    
}

export default CartWidget;