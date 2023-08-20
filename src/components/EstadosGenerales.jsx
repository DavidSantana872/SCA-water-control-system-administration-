import React, { useState, useEffect } from "react"; // Importa useState y useEffect
import axios from "axios"; // Importa la librería axios
import BotonRegresar from "./BotonRegresar";
import "./resource/style/EstadoGeneralStyle.css"
import NavegacionComponente from "./NavegacionComponente";
const EstadosGenerales = (props) => {
  const [datos, setDatos] = useState([]); // Estado para almacenar los datos recibidos

  // Función para obtener los datos desde el backend
  const obtenerDatos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users"); // Realiza la solicitud al backend (ajusta la URL según tu configuración)
      setDatos(response.data); // Almacena los datos en el estado
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  useEffect(() => {
    obtenerDatos(); // Llama a la función para obtener los datos cuando el componente se monta
  }, []);

  return (
    <>
      <BotonRegresar />
      <NavegacionComponente title = "Estado General de usuarios"></NavegacionComponente>
      <div className="fgb">
        <div className="tablatb">
        <table className="datos_db">
            <tr className="principaltb">
              <th>ID</th>
              <th>Nombres</th>
              <th>Sector</th>
            </tr>
          {datos.map((dato) => (
            <tr key={dato.ID}>
              <td>{dato.ID}</td>
              <td>{dato.NOMBRE_USUARIO}</td>
              <td>{dato.SECTOR_VIVIENDA}</td>
              {/* Agrega aquí más campos según la estructura de tus datos */}
            </tr>
        ))}
        </table>
        </div>
      </div>
    </>
  );
};

export default EstadosGenerales;
