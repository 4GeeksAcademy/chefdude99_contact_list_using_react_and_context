import { json, useNavigate } from "react-router-dom";
import CardContact from "../components/CardContact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/chefdude99/contacts")
			.then((response) => {
				if (response.status === 404) {
					fetch("https://playground.4geeks.com/contact/agendas/chefdude99", {
						method: "POST",
					})
						.then((response) => {
							console.log(response)
						})
				}
				return (response.json())
			})
			.then((data) => dispatch({ type: "set_contactos", payload: data.contacts }))
			.catch((error) => console.log(error))
	}, [store.deleteTrigger])

	const navigate = useNavigate();

	return (
		<div className="container text-center mt-5">
			{store.contactos.length === 0 ? <h1>Ingresa un Nuevo Contacto</h1> :
				store.contactos?.map((contact, index) => {
					return (
						<CardContact contact={contact} key={index} />
					)
				})
			}
			<button className="btn btn-success"
				onClick={() => { navigate("/new-contact") }}>
				Agregar Contacto
			</button>
		</div>
	);
}; 