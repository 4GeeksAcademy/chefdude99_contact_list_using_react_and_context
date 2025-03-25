import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const EditContact = () => {

    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const singleId = store.contactos.find(contacto => contacto.id === parseInt(id));

    const [contacto, setContacto] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        console.log(singleId)
        if (singleId) {
            setContacto({
                name: singleId.name,
                phone: singleId.phone,
                email: singleId.email,
                address: singleId.address,
            })
        }
    }, [])

    function editContact(e) {
        e.preventDefault()
        fetch(`https://playground.4geeks.com/contact/agendas/chefdude99/contacts/${singleId.id}`,
            {
                method: "PUT",
                body: JSON.stringify(contacto),
                headers: { "Content-Type": "application/json" }
            }
        )
            .then((response) => {
                if ( !response.ok ) {
                    throw new Error("error al modificar el contacto")
                }
                return response.json()
            })
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                return error
            })
    }

    return (
        <div className="container">
            <br />
            <h1 className="text-center">Editar un Contacto</h1>
            <br />
            <form onSubmit={editContact}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo</label>
                    <input onChange={(e) => { setContacto({ ...contacto, name: e.target.value }) }}
                        value={contacto.name}
                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre completo"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Direccion de Correo</label>
                    <input onChange={(e) => { setContacto({ ...contacto, email: e.target.value }) }}
                        value={contacto.email}

                        type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
                    <input onChange={(e) => { setContacto({ ...contacto, phone: e.target.value }) }}
                        value={contacto.phone}

                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="Numero"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Direccion local</label>
                    <input onChange={(e) => { setContacto({ ...contacto, address: e.target.value }) }}
                        value={contacto.address}

                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="Direccion"></input>
                </div>
                <button className="d-grid gap-2 btn btn-success mt-2" type="submit">
                    Guardar
                </button>
                <a className="volver-atras" href=""
                    onClick={() => { navigate("/") }}>
                    vuelve a los contactos
                </a>
            </form>
        </div>
    );

}