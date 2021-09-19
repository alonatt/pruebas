import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Vendedor = props => {
	return (
		<>
			<div className="container-fluid row">
				<div className="col col-2" />
				<div className="col col-10 text-center mt-5">
                    <div clasName="row">
					<h1>Bienvenido {props.name} </h1>
					<p />
					<a href="#" className="btn btn-success">
						If you see this green button, bootstrap is working
					</a>
                    </div>
				</div>
			</div>
		</>
	);
};

Vendedor.propTypes = {
	name: PropTypes.text
};

