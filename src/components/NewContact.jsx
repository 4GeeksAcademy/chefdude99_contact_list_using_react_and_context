import React, { useState } from "react";

export const NewContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [user, setUser] = useState({})

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const saveContact = () => {
        setUser({
            "name": name,
            "email": email,
            "number": number,
            "address": address,
        })

        const respuesta = fetch("https://playground.4geeks.com/contact/agendas/chefdude99/contacts",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" }
            }
        )
        .then((response)=> {
            console.log(response)
            
        })
    }
    return (
        <div className="container">
            {name.length > 0 && name}
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre completo</label>
                <input onChange={handleName}
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Direccion de Correo</label>
                <input onChange={handleEmail}
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Telefono</label>
                <input onChange={handleNumber}
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Direccion local</label>
                <input onChange={handleAddress}
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div className="btn btn-success"
                onClick={saveContact}>
                Guardar
            </div>
            <br />
            <br />
            <a className="volver-atras" href="">
                vuelve a los contactos
            </a>
        </div>
    );

}