import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Saludo = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.usuarios.map((persona, posicion) => {
				return (
					<div key={posicion}>
						<div className="alert alert-secondary" role="alert" key={posicion}>
							<span> {persona.id} </span> <h2>Bienvenido {persona.name}</h2>
						</div>

						<div className="col col-6">
							<Link to={"/persona/" + persona.id}>
								<button className="btn btn-secondary"> Ir a perfil</button>
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};
