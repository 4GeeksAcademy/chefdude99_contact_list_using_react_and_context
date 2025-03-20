import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NewContact } from "../components/NewContact.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<NewContact></NewContact>
		</div>
	);
}; 