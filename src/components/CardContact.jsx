import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useGlobalReducer from '../hooks/useGlobalReducer'

const CardContact = ({ contact }) => {
const { store , dispatch } = useGlobalReducer()

    const navigate = useNavigate()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Estas seguro ?",
            text: "Si eliminas este contacto, no volvera",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("https://playground.4geeks.com/contact/agendas/chefdude99/contacts/" + id, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("error al modificar el contacto")
                        }
                        dispatch({
                            type: 'eliminar_contacto',
                        })
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        Swal.fire("Error", "No se pudo eliminar el contacto.", "error");
                    })
            }
        });
    }

    return (
        <div className="carta-contacto container card mb-3" style={{
            maxWidth: "800px"
        }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg" className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="contenido-carta card-body">
                        <h5 className="card-title text-start">{contact.name}</h5>
                        <p className="card-text text-start"><i className="fa-solid fa-mobile-screen-button"></i> {contact.phone}</p>
                        <p className="card-text text-start"><i className="fa-solid fa-inbox"></i> {contact.email}</p>
                        <p className="card-text text-start"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
                    </div>
                    <div className="botones">
                        <div className="boton-editar">
                            <button className="btn btn-primary" onClick={() => {
                                navigate(`/edit-contact/${contact.id}`)
                            }}><i className="fa-solid fa-pencil"></i></button>
                        </div>
                        <button type="button" className="btn btn-primary"
                            onClick={() => handleDelete(contact.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
          
    )
}

export default CardContact