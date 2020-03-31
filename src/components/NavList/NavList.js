import React from 'react';
import NavItem from '../NavItem/NavItem.js';
import PropTypes from 'prop-types';
import './NavList.css';

const NavList = props => {
    return (
        <ul className="nav-list">
            {props.datos.map((data, index) => (
                <NavItem datos={data} key={`nav-item-${index}`}/>
            ))}
        </ul>
    );
};

NavList.propTypes = {
    datos: PropTypes.array.isRequired,
};

export default NavList;
