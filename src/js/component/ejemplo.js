import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Table } from "reactstrap";



const MenuConceptos = () => {
    return (
        <div>
  <span>Componente Link: </span>
  <Link to="/">Home</Link>
  <Link to="/acerca">Acerca</Link>
  <Link to="/contacto">Contacto</Link>
  <Link to="/no-existe">Error 404</Link>
  </div>
    )
}

