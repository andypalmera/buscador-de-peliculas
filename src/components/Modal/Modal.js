import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <section className="modal">
            <div className="modal-container">
                <div className="modal-image"></div>
                <div className="modal poster"> {props.image}</div>
                <div className="modal-info"> esta pelicula es un asco</div>
            </div>
        </section>
    );
};
export default Modal;
