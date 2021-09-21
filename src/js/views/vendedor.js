import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Saludo } from "../component/saludo";
import { Zonanorte } from "../component/zonanorte";
import { Zonasur } from "../component/zonasur";
import { Sidebar } from "../component/sidebar";
import { Desplegable } from "../component/dropdown";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
				<div className="col col-10 mt-5">
					<h5>Bienvenido {store.detalleusuarios.name} </h5>
					<p>¿donde necesitas enviar tu producto hoy?</p>
					<Desplegable />

					<Link to="/">
						<button>Go back</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export const Render = () => {
	return (
		<div>
			<BrowserRouter>
				<Desplegable />
				<Switch>
					<Route exact path="/zonanorte" component={Zonanorte} />
					<Route exact path="/Zonasur" component={Zonasur} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};
