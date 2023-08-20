import React, { useState } from "react";
import "./resource/style/BusquedaStyle.css";
import BotonRegresar from "./BotonRegresar";
import axios from "axios";

const ComponenteBuscar = (props) => {
  const {ex} = props;
  const [Buscar, setBuscar] = useState("");
  const PorCambio = (event) => {
    setBuscar(event.target.value);
  };

  const EnviarDatos = () => {
    axios
      .post("http://localhost:5000/api/users", {
        NombreUsuario: Buscar,
      })
      .then((response) => {
        // respuesta del servidor
        ex(response.data)
      })
      .catch((error) => {
        console.error("Error al enviar los datos al servidor:", error);
        ex("ERROR MISAMORES")
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    EnviarDatos();
  };

  return (
    <>
      <BotonRegresar />
      <div className="block">
        <h1 className="title_busqueda">{props.BusquedaTipo}</h1>
        <form onSubmit={handleFormSubmit} className="busqueda">
          <input
            value={Buscar}
            onChange={PorCambio}
            type="text"
            className="busqueda_entrada"
            placeholder="Buscar Usuario"
          />
          <button type="submit" className="boton_buscar">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

export default ComponenteBuscar;
