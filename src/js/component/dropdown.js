import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";

export const Desplegable = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle}>
			<DropdownToggle caret>Dropdown</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>
					<Link to="/vendedor/">Zona Norte</Link>
				</DropdownItem>
				<DropdownItem>Zona Sur</DropdownItem>
				<DropdownItem>Bar Action</DropdownItem>
				<DropdownItem>Quo Action</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
