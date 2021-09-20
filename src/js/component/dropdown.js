import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Desplegable = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle}>
			<DropdownToggle caret>Dropdown</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>Some Action</DropdownItem>
				<DropdownItem>Foo Action</DropdownItem>
				<DropdownItem>Bar Action</DropdownItem>
				<DropdownItem>Quo Action</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
