import React, { useState } from "react";
import BotonRegresar from "./BotonRegresar";
import BuscarComponente from "./BuscarComponente";
import TarjetaUsuario from "./TarjetaUsuario";
const EstadoUsuarioComponente = ()=>{
    const [BusquedaEstado, setBusquedaEstado] = useState(false)
    const [DatosR, setDatosR] = useState("")

    const Comunicacion = (Dts) => {
        setBusquedaEstado(true)
        setDatosR(Dts)
    }
    const ElementosBusqueda = () => {
        if(BusquedaEstado === false){
            return <BuscarComponente BusquedaTipo = "Estado De Usuario" ex = {Comunicacion}></BuscarComponente>
        }
        else{
           
            return <TarjetaUsuario datos = {DatosR} componente = "Estado "></TarjetaUsuario>
        }
    }
    return(
        <>
            <BotonRegresar></BotonRegresar>
            {
                ElementosBusqueda()
            }
            
        </>
    )
}
export default EstadoUsuarioComponente;