import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav id="Home" className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#Home">
                <img src="http://www.trabunche.com.ar/wp-content/uploads/logosmall1.png" alt="LogoTrabunche" className="d-inline-block align-text-top imgHeader"/>
                </a>

                <a className="navLink" href="#Home">Cabañas</a>
                <a className="navLink" href="#Home">Servicios</a>
                <a className="navLink" href="#Home">Nosotros</a>
                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;