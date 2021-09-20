import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Saludo } from "../component/saludo";

export const Vendedor = () => {
	const { store, actions } = useContext(Context);
	const { idvendedor } = useParams();
	useEffect(() => {
		actions.loadDetalleUsuario(idvendedor);
	}, []);
	return (
		<>
			<div className="container-fluid row">
				<div className="col col-2" />
				<div className="col col-10 text-center mt-5">
					<h1>Bienvenido {store.detalleusuarios.name} </h1>
					<Link to="/">
						<button>Go back</button>
					</Link>
				</div>
			</div>
		</>
	);
};
