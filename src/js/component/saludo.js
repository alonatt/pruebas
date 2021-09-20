import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Saludo = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.usuarios.map((vendedor, posicion) => {
				return (
					<div key={posicion}>
						<div className="alert alert-secondary" role="alert" key={posicion}>
							<span> {vendedor.id} </span> <h2>Bienvenido {vendedor.name}</h2>
						</div>

						<div className="col col-6">
							<Link to={"/vendedor/" + vendedor.id}>
								<button className="btn btn-secondary"> Ir a perfil</button>
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};
