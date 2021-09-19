import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Saludo } from "../component/saludo";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Prueba = props => {
	const { store, actions } = useContext(Context);
	const { idpersona } = useParams();

	useEffect(() => {
		actions.loadDSomeData(idpersona);
	});

	return (
		<>
			<div className="container-fluid text-center mt-5">
				<h1>PERSONAJE: {store.usuarios.name}</h1>
				<div className="card varios text-dark bg-warning mb-3">
					<div className="card-header">Caracteristicas</div>
				</div>{" "}
				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</>
	);
};
