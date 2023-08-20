import imagen1 from "./resource/img/Generar Pago.svg"
import imagen2 from "./resource/img/Estado Usuario.svg"
import imagen3 from "./resource/img/Estados Generales.svg"
import imagen4 from "./resource/img/Importar Mediciones.svg"
import imagen5 from "./resource/img/Usuarios En Corte.svg"
import "./resource/style/SelectOpcionStyle.css"
import { useNavigate } from "react-router-dom"
const SelectOption = () => {
    const navigate = useNavigate()
    const Click = (id) =>{
        navigate(`/${id.split(" ").join("")}`)
    }
    const OptionsData = ["Generar Pago", "Estado Usuario", "Estados Generales", "Importar Mediciones", "Usuarios En Corte"];
    const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5]
    return (
        <>
           <h1>¿Qué desea hacer? </h1>
            <div className="BlockSelect_Menu">
                {
                    OptionsData.map((opcion, index) => (
                        <div className={'box_target'} id={opcion} onClick={() => {Click(opcion)}}>
                            <img className="IconoOpcion" src={imagenes[index]} alt="Ups!" />
                            <p className="title_box_target">{opcion}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SelectOption;