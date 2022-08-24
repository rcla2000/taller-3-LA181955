import React from "react";
import "../index.css";
import Descripcion from "./Descripcion";
import Encabezado from "./Encabezado";
import Skills from "./Skills";

class Derecha extends React.Component {
  render() {
    return (
      <div className="derecha">
        <div className="row color-gris">
          <Encabezado
            titulo="Mi Portafolio"
            nombre="Roberto Carlos López Abarca"
            carrera="Ingeniería en Ciencias de la Computación"
          />
          <div className="contenido">
            <Descripcion />
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default Derecha;
