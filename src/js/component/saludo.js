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
					<div className="container row mx-1 justify-content-center" key={posicion}>
						{" "}
						<div className="card mx-1">
							<div className="row col-1">
								<span> {persona.id} </span>
							</div>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Retrato_del_Maestro_Yoda.jpg/245px-Retrato_del_Maestro_Yoda.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{persona.name}</h5>
								<div className="row">
									<div className="col col-6">
										<Link to={"/persona/" + persona.id}>
											<button className="btn btn-secondary"> Ir a perfil</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
