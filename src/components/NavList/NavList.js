import React from 'react';
import NavItem from '../NavItem/NavItem.js';
import './NavList.css';

const NavList = props => {
    // puedes usar destructing para la variable datos, tipo: const datos = { props }
    return (
        <ul className="nav-list">
            {/* evita usar nombres de variables muy simples como "d" "e" etc, puede usar datos.map(item => ...) */}
            {props.datos.map(d => (
                <NavItem datos={d} />
            ))}
        </ul>
    );
};

export default NavList;
