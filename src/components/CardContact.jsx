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
                                navigate("/new-contact")
                            }}><i className="fa-solid fa-pencil"></i></button>
                            <button><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact