import React from 'react';
import './Nav.css';
import NavList from '../NavList/NavList.js';

const Nav = props => {
    return (
        <nav className="nav">
            <a href="/" className="nav-logo">
                <img src="../../../imagenes/logo ada.svg" alt="" className="nav-logo-image" />
            </a>

            <div className="nav-hamburguer">esto va a tener un display none y adentro varios div para hacer el menu version movil</div>

            <NavList datos={props.datos} />
        </nav>
    );
};

export default Nav;
