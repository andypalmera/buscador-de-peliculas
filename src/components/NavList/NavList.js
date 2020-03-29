import React from 'react';
import NavItem from '../NavItem/NavItem.js';
import './NavList.css';

const NavList = props => {
    // puedes usar destructing para la variable datos, tipo: const datos = { props }
    const datos = { props };
    console.log('%c props in navlist ','color:yellow',props)
    return (
        <ul className="nav-list">
            {/* evita usar nombres de variables muy simples como "d" "e" etc, puede usar datos.map(item => ...) */}
            {props.datos.map(item => (
                <NavItem datos={item} />
            ))}
        </ul>
    );
};

export default NavList;
