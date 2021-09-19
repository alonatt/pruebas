import React from "react";
import "../../styles/home.scss";
import { Saludo } from "../component/saludo";
import { Context } from "../store/appContext";

export const Vendedor = () => {
	<>
		<div className="container-fluid row">
			<div className="col col-2" />
			<div className="col col-10 text-center mt-5">
				<div clasName="row">
					<h1>Bienvenido </h1>
					<h2>
						<Saludo />
					</h2>

					<p />
					<a href="#" className="btn btn-success">
						If you see this green button, bootstrap is working
					</a>
				</div>
			</div>
		</div>
	</>;
};
