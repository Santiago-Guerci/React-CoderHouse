import './NavBar.css'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav id="Home" className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src="https://compragamer.net/assets/img/logo-fix.png" alt="LogoCompraGamer" className="d-inline-block align-text-top imgHeader"/>
                </Link>

                <NavLink to={'/category/consolas'} className={({ isActive }) => isActive ? 'activeCategorias' : 'categorias'}> Consolas </NavLink>
                <NavLink to={'/category/juegos'} className={({ isActive }) => isActive ? 'activeCategorias' : 'categorias'}> Juegos </NavLink>
                <NavLink to={'/category/hardware'} className={({ isActive }) => isActive ? 'activeCategorias' : 'categorias'}> Hardware </NavLink>
                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;