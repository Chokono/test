import React from 'react';
import { NavLink } from "react-router-dom";

import FilterIcon from "./svg/filter";

import './Menu.scss';

function Menu() {
  return (
  	<div className="menu__container">
    	<NavLink className="menu__item" activeClassName="active" to="jogs">Jogs</NavLink>
    	<NavLink className="menu__item" activeClassName="active" to="info">Info</NavLink>
    	<NavLink className="menu__item" activeClassName="active" to="contact-us">Contact us</NavLink>
    	<FilterIcon className="menu__filter" />
    </div>
  );
}

export default Menu;