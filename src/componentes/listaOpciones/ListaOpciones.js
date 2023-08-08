 import "./ListaOpciones.css"
const ListaOpciones = (props) => {
  

    const manejarCambiolista=(e) =>{
        props.actualizarEquipo(e.target.value)
    }
    return <div className="Lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambiolista}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipo, ListaOpciones)=><option key ={ListaOpciones} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones;