import React, {useState}from "react";
import BuscarComponente from "./BuscarComponente"
import BotonRegresar from "./BotonRegresar";
import TargetaUsuario from "./TarjetaUsuario"
const GenerarPago = () => {
    const [BusquedaEstado, setBusquedaEstado] = useState(false)
    const [DatosR, setDatosR] = useState("")

    const Comunicacion = (Dts) => {
        setBusquedaEstado(true)
        setDatosR(Dts)
    }
    const ElementosBusqueda = () => {
        if(BusquedaEstado === false){
            return <BuscarComponente BusquedaTipo = "Generar pago" ex = {Comunicacion}></BuscarComponente>
        }
        else{
           
            return <TargetaUsuario datos = {DatosR} componente = "Generar Pago "></TargetaUsuario>
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
export default GenerarPago;