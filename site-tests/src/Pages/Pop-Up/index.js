import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../Components/Modal/Modal'

import './Pop-up.css';

export default function PopUp() {
  const [isModalVisibile, setIsModalVisible] = useState(false)

  return (
    <div className="Pop-Up">
      <button onClick={()=> setIsModalVisible(true)} className="Card">
        <div className="Cor"></div>
        <div className="Title"><h7>Titolo do Card</h7></div>
        <div className="Horario"><h5>18:00</h5></div>
      </button>
        {isModalVisibile ? (
          <Modal onClose={ ()=> setIsModalVisible(false)}></Modal>
        ) : null}
    </div>
  );
}

