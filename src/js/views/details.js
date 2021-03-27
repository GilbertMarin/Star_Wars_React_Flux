import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Details = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return <h1>Hola</h1>;
};
export default Details;
