import React from "react";
import "./resource/style/NavegacionComponente.css"
const NavegacionComponente = (props) => {
    
    return(
        <>
           <div className="TitleNavegacion">
                {props.title}
           </div>
        </>
    )
}
export default NavegacionComponente;