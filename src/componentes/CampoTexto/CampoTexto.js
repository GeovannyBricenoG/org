import { useState } from "react";
import "./CampoTexto.css"
const CampoTexto = (props)=> {

    //const [valor,ActualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder}...`;

    //Destructuración
    const {type = "text"} = props

    const manejarCambio = (e) =>{
      props.actualizarValor(e.target.value)
    }
   
  return <div className={`Campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado}
        required ={props.required}
        value={props.valor}
         onChange={manejarCambio}
         type={type}
         />
    </div>
}

export default CampoTexto;