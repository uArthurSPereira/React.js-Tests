//import npm
import React from 'react';
import { Link } from 'react-router-dom';

//import styles
import "./Inicial.css";

export default function Inicial() {
  return (
    <div className="Inicial">

      <div className="Container-Text">
        <h1 className="Text">
          Hello World!
        </h1>
        <h3 className="Text">
          <i>Aqui estão alguns Testes e Apps em React feito por mim.</i>
        </h3>
      </div>

      <div className="Container-Links">

        <Link to="primeiro-contato-react">
          <button className="PCR"> Primeiro Contato com React </button>
        </Link>
        
        <div className="Container-Links-Secundario">

          <Link to="drag-n-drop">
            <button className="TDND"> Test Drag N' Drop </button>
          </Link>

          <Link to="/pop-up"> 
            <button className="TPU"> Test Pop-Up </button> 
          </Link> 

        </div>

        <div className="Container-Links-Secundario">

          <Link to="lista-negra">
            <button className="LN"> Lista Negra </button>
          </Link>
          
          <Link to="lista-fofa">
            <button className="LF"> Lista Fofa </button>
          </Link>

        </div>

        <div className="Container-Links-Secundario">

          <Link to="memelation">
            <button className="ML"> Memelation </button>
          </Link>

          <Link to="organizer">
            <button className="OZ"> Test Organizer </button>
          </Link>

        </div>

      </div>

    </div>
  );
}
