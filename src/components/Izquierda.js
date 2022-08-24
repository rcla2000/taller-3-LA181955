import React from 'react';
import avatar from "../assets/img/avatar.webp";
import "../index.css";

class Izquierda extends React.Component {
  render() {
    return (
      <div className="izquierda">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    );
  }
}

export default Izquierda;
