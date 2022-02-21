import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav id="Home" className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#Home">
                    <img src="https://compragamer.net/assets/img/logo-fix.png" alt="LogoCompraGamer" className="d-inline-block align-text-top imgHeader"/>
                </a>

                <a className="navLink" href="#Home">Productos</a>
                <a className="navLink" href="#Home">Categorías</a>
                <a className="navLink" href="#Home">Nosotros</a>
                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;