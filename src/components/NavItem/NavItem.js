import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href={props.datos.href} className="nav-link">
                <div className="nav-link-wrap">
                    {props.datos.svg()}
                    <span>{props.datos.span}</span>
                </div>
            </a>
        </li>
    );
};

export default NavItem;
