import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardContact = ({ contact }) => {
    const navigate = useNavigate()


    return (
        <div className="container card mb-3" style={{
            maxWidth: "800px"
        }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg" className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="contenido card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text">{contact.email}</p>
                        <p className="card-text">{contact.phone}</p>
                        <p className="card-text">{contact.address}</p>
                        <div>
                            <button onClick={() => {
                                navigate(`/edit-contact/${contact.id}`)
                            }}><i className="fa-solid fa-pencil"></i></button>
                            {/* <button><i className="fa-solid fa-trash-can"></i>
                            </button> */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-solid fa-trash-can"></i>
                            </button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Estas seguro ?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Si borras este contacto no podras recuperarlo jamas ni nunca !!!
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" className="btn btn-primary">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact