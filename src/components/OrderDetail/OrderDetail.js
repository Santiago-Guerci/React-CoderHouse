import CartContext from "../../context/CartContext";
import { useContext } from "react";

const OrderDetail = ({contact, showForm}) => {

    const { getTotal } = useContext(CartContext);

    return (
        <div>
            <h2>Detalle de la compra</h2>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Email: {contact.email}</h3>
            <h3>Telefono: {contact.phone}</h3>
            <h3>Total: ${getTotal()}</h3>
            <button className="btn btn-primary m-3" onClick={()=>showForm()}>Editar datos de contacto</button>
        </div>
    );
}

export default OrderDetail;