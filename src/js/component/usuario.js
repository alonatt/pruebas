import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Saludo } from "../component/saludo";

export const Usuario = () => {
	const { store, actions } = useContext(Context);
	const { idvendedor } = useParams();

	useEffect(() => {
		actions.loadDetalleUsuario(idvendedor);
	}, []);

	return (
		<div className="card bg-light">
			<div className="row">
				<div className="col col-8">
					<div className="card-body">
						<span>Bienvenido {store.detalleusuarios.username}</span>
					</div>
				</div>
				<div className="col col-3">
					<img
						src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"
						className="img-fluid rounded-start"
					/>
				</div>
			</div>
		</div>
	);
};
