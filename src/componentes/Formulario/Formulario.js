import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../listaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";



const Formulario = (props) => {

    const [nombre, actualizarNombre]= useState("")
    const [puesto, actualizarPuesto]= useState("")
    const [foto, actualizarFoto]= useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio =(e) =>{
        e.preventDefault()
        let DatosAEnviar = {
          nombre,
          puesto,
          foto,
          equipo
      }
       registrarColaborador(DatosAEnviar)
     
    }

    const manejarNuevoEquipo = (e) =>{
      e.preventDefault()
      crearEquipo({titulo,colorPrincipal: color})
    }
 return <section className="Formulario"> 
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el Formulario para crear el colaborador.</h2>
        <CampoTexto 
        titulo= "Nombre"
         placeholder="Ingrese el Nombre"
          required
          valor = {nombre}
          actualizarValor = {actualizarNombre}
          />
        <CampoTexto
         titulo=  "Puesto" 
         placeholder="Ingrese el Puesto"
          required
          valor = {puesto}
          actualizarValor = {actualizarPuesto}
          />
        <CampoTexto 
        titulo= "Foto" 
        placeholder="Ingrese enlace de Foto" 
        required
        valor = {foto}
          actualizarValor = {actualizarFoto}
        />
        <ListaOpciones
        valor = {equipo}
        actualizarEquipo = {actualizarEquipo}
        equipos={(props.equipos)}
        />
        <Boton>
            Crear
        </Boton>
    </form>
    <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el Formulario para crear Equipos.</h2>
        <CampoTexto 
        titulo= "Titulo"
         placeholder="Ingrese el Titulo"
          required
          valor = {titulo}
          actualizarValor = {actualizarTitulo}
          />
        <CampoTexto
         titulo=  "Color" 
         placeholder="Ingrese el Color en Hexadecimales"
          required
          valor = {color}
          actualizarValor = {actualizarColor}
          type ="color"
          />
          <Boton>
            Registrar Equipo
        </Boton>
          </form>
     </section>
}

export default Formulario;

