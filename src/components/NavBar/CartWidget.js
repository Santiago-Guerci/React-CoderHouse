import { Link } from 'react-router-dom';
import './NavBar.css';

const CartWidget = () => {
    return (
        <div className="cartDiv">
            <Link to={'/cart'}>
                <img src="https://cdn-icons-png.flaticon.com/512/869/869104.png" alt="cartIcon" className="cartIcon"/>
            </Link>
        </div>
    )    
}

export default CartWidget;