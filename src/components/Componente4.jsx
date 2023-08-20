import React from "react";
import BotonRegresar from "./BotonRegresar";
const Componente4 = (props)=>{
    return(
        <>
            <BotonRegresar></BotonRegresar>
            <div>
             {props.infor}
            </div>
        </>
    )
}
export default Componente4