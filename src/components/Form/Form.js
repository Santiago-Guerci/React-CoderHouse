import { useState } from 'react';

const Form = ({setContact, changeShow}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        changeShow();

        const objContact = {
            name,
            surname,
            email,
            phone
        }

        setContact(objContact);
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
    }
    

    return (
        <div className="formDiv d-flex justify-content-between">
            <form className="row g-3" onSubmit={handleForm}>
                <div className="col-12">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={name} onChange={({target}) => setName(target.value)}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={surname} onChange={({target}) => setSurname(target.value)}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Teléfono</label>
                    <input type="number" className="form-control" value={phone} onChange={({target}) => setPhone(target.value)}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Confirmar Compra</button>
                </div>
            </form>
        </div>
    )
    
}

export default Form;