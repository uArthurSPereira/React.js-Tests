import React from 'react';

import "./Modal.scss";

const Modal = ({id = 'Modal', onClose = () => {} }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

    return(
        <div id={id} className="Modal" onClick={handleOutsideClick}>

            <div className="Container">

                <div className="Cor-Pop-Up"></div>

                <div className="Input-Title">
                    <input type="text" placeholder="Titolo Tarefa"/>
                </div>

                <div className="Inputs">
                    <input className="Input-Time" type="time" />
                    <input className="Input-Date" type="date" />
                    <button className="Color">Cor</button>
                </div>

                <div className="Input-Descricao"> 
                    <label>Descrição:</label> 
                    <input type="text" />
                </div>

                <div className="Container-Checkbox">
                    <button className="AddItem">Adicionar Item</button>
                </div>

                <div className="Final">
                    <button className="Delete">Excluir</button>
                    <button className="Close" onClick={onClose}>OK</button>
                </div>
                
            </div>
        </div>
    )
};

export default Modal;