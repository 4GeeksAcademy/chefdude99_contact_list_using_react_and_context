import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const EditContact = () => {

    const navigate = useNavigate();
    const [guardar, setGuardar] = useState("");
    const [nuevoContacto, setNuevoContacto] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    function enviarContacto() {
        fetch("https://playground.4geeks.com/contact/agendas/chefdude99/contacts",
            {
                method: "POST",
                body: JSON.stringify(nuevoContacto),
                headers: { "Content-Type": "application/json" }
            }
        )
            .then((response) => {
                console.log(response)
            })
            .then((data) => {
                setGuardar(...guardar, data);
                navigate("/")
            })
            .catch((error) => {
                return error
            })
    }

    return (
        <div className="container">
            <br />
            <h1 className="text-center">Agrega un nuevo Contacto</h1>
            <br />
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre completo</label>
                <input onChange={(e) => {setNuevoContacto({ ...nuevoContacto, name: e.target.value })}}
                    value={nuevoContacto.name}
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre completo"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Direccion de Correo</label>
                <input onChange={(e) => {setNuevoContacto({ ...nuevoContacto, email: e.target.value })}}
                    value={nuevoContacto.email}

                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Telefono</label>
                <input onChange={(e) => {setNuevoContacto({ ...nuevoContacto, phone: e.target.value })}}
                    value={nuevoContacto.phone}

                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Numero"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Direccion local</label>
                <input onChange={(e) => {setNuevoContacto({ ...nuevoContacto, address: e.target.value })}}
                    value={nuevoContacto.address}

                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Direccion"></input>
            </div>
            <div className="d-grid gap-2 btn btn-success mt-2"
                onClick={() => {enviarContacto()}}>
                Guardar
            </div>
            <a className="volver-atras" href=""
            onClick={() => {navigate("/")}}>
                vuelve a los contactos
            </a>
        </div>
    );

}