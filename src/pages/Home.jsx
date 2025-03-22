import CardContact from "../components/CardContact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/chefdude99/contacts")
			.then((response) => response.json())
			.then((data) => dispatch({ type: "set_contactos", payload: data.contacts }))
			.catch((error) => console.log(error))
	}, [])
	//debo crear un contacto en base a este codigo
	//debo crear una base en html con este codigo de arriba
	return (
		<div className="text-start mt-5">
			 {
				store.contactos.map((contact, index) => {
					return (
						<CardContact contact={contact} />
					)
				})
			} 

			<button className="">

			</button>
		</div>
	);
}; 