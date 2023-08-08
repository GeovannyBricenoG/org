import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) =>{
    
    //Desconstrucción
    const {titulo, colorPrincipal, colorSecundario, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like}= props
    const color = {
        backgroundColor:hexToRgba(colorPrincipal,0.6)
    }

    return <> { colaboradores.length > 0 &&
    <section className="equipo" style={color}> 
<input
className="inpit-Color"
 type='color'
 value={colorPrincipal}
 onChange={(evento)=>{
    actualizarColor(evento.target.value, id)
 }}
/>

    
     <h3 style={{borderColor: colorPrincipal}} > {titulo}</h3>
     <div className="Colaboradores">
     {
        colaboradores.map((colaborador, index) => <Colaborador 
        datos ={colaborador}
        key = {index}
        colorPrimario = {colorPrincipal}
        eliminarColaborador = {eliminarColaborador}
        like = {like}
        />
        )
     }
     </div>

    </section>
} </>
}
export default Equipo