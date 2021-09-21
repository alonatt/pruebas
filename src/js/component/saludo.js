import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Saludo = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<button>
				{store.usuarios.map((vendedor, posicion) => {
					return (
						<div key={posicion}>
							<div className="row" key={posicion}>
								<span>
									{" "}
									Bienvenido {vendedor.name}{" "}
									<Link to={"/vendedor/" + vendedor.id}>
										<button className="btn btn-secondary"> Ir a perfil</button>
									</Link>{" "}
								</span>
							</div>
						</div>
					);
				})}
			</button>
		</>
	);
};
