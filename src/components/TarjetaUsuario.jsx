import imagen from "./resource/img/water.svg";
import "./resource/style/TargetStyle.css"
import NavegacionComponente from "./NavegacionComponente";
const TarjetaUsuario = (props) => {
    
    const TITLE = `${props.componente} de ${props.datos.NOMBRE_USUARIO}`
    return (
        <div className="bodyDiv">
           
            <NavegacionComponente title = {TITLE}></NavegacionComponente>
            <div className="targetDIV">
                <div className="imagen">
                    <img src={imagen} alt="" />
                </div>
                <span className="block_information">
                    <div>
                        <p className=" usuarioD title ">ID Usuario:</p>
                        <p className=" usuarioD title ">Nombre:</p>
                        <p className=" usuarioD title ">Sector Vivienda:</p>
                    </div>
                    <div>
                        <p className=" usuarioD "> {props.datos.ID}</p>
                        <p className=" usuarioD "> {props.datos.NOMBRE_USUARIO}</p>
                        <p className=" usuarioD "> {props.datos.SECTOR_VIVIENDA}</p>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default TarjetaUsuario;
