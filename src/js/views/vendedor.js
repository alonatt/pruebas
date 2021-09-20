import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Saludo } from "../component/saludo";
import { TablaZonas } from "../component/zonanorte";
import { Sidebar } from "../component/sidebar";
import { Desplegable } from "../component/dropdown";

export const Vendedor = () => {
	const { store, actions } = useContext(Context);
	const { idvendedor } = useParams();
	useEffect(() => {
		actions.loadDetalleUsuario(idvendedor);
	}, []);
	return (
		<>
			<div className="container-fluid row">
				<div className="col col-2">
					<Sidebar />
				</div>
				<div className="col col-10 mt-5">
					<h5>Bienvenido {store.detalleusuarios.name} </h5>
					<p>¿donde necesitas enviar tu producto hoy?</p>
					<Desplegable />
					<TablaZonas />
					<Link to="/">
						<button>Go back</button>
					</Link>
				</div>
			</div>
		</>
	);
};
