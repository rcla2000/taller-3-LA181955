import "./index.css";
import Izquierda from "./components/Izquierda";
import Derecha from "./components/Derecha";

function App() {
  return (
    <div className="container_fluid">
      <section className="header">
        <Izquierda />
        <Derecha />
      </section>
    </div>
  );
}

export default App;
