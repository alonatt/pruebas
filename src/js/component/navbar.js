import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="row col-4">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Fleet</span>
				</Link>
			</div>
			<div className="row col-1 ml-auto">
				<img src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg" />
			</div>
		</nav>
	);
};
