import React from "react";
import "../index.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div>
          <span className="nivel1">Frontend</span>
        </div>
        <div className="d-flex flex-wrap">
          <span className="nivel2">HTML5</span>
          <span className="nivel2">CSS3</span>
          <span className="nivel2">Bootstrap</span>
          <span className="nivel2">Materialize</span>
          <span className="nivel2">JavaScript</span>
          <span className="nivel2">React</span>
          <span className="nivel2">Jquery</span>
        </div>
        <div>
          <span className="nivel1">Backend</span>
        </div>
        <div className="d-flex flex-wrap">
          <span className="nivel2">C#</span>
          <span className="nivel2">ASP .NET</span>
          <span className="nivel2">C++</span>
          <span className="nivel2">Java</span>
          <span className="nivel2">PHP</span>
          <span className="nivel2">Laravel</span>
          <span className="nivel2">Python</span>
          <span className="nivel2">Visual Basic</span>
        </div>
        <div>
          <span className="nivel1">Bases de datos</span>
        </div>
        <div className="d-flex flex-wrap">
          <span className="nivel2">MySQL</span>
          <span className="nivel2">SQL Server</span>
          <span className="nivel2">PostgreSQL</span>
        </div>
      </div>
    );
  }
}

export default Skills;
