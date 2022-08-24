import React from "react";
import "../index.css";

class Encabezado extends React.Component {
  render() {
    return (
      <div className="encabezado mb-4">
        <h1 className="mb-4">
          <span className="color-rojo">| </span>{this.props.titulo}
        </h1>
        <h2>{this.props.nombre}</h2>
        <h5>{this.props.carrera}</h5>
      </div>
    );
  }
}

export default Encabezado;
