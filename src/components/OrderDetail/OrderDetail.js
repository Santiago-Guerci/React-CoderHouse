const OrderDetail = ({contact}) => {

    console.log(contact);
    return (
        <div>
            <h2>Detalle de la compra</h2>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Email: {contact.email}</h3>
            <h3>Telefono: {contact.phone}</h3>
        </div>
    );
}

export default OrderDetail;