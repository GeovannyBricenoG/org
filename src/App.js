import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header'; 
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/Miorg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {
  //Desconstrucción
  const [MostrarFormulario, ActualizarMostrar]= useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])

  //lista de Equipos
const [Equipos, actualizarEquipos] =useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrincipal: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrincipal: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrincipal: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrincipal: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "Ux y Deseño",
    colorPrincipal: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrincipal: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrincipal: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }
  
  
  ])

  // Ternario --> condicion ? seMuestra : noSeMiestra
  //Condicion && Se muestra

  function CambiarMostrar() {
    ActualizarMostrar(!MostrarFormulario);
  }

  // Registro Colaboradores

  const registrarColaborador = (colaborador) => {

    //spread Operator

    actualizarColaboradores([...colaboradores, colaborador])

  }
// eliminar Colaborador
const eliminarColaborador = (id) => {
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

// Actualizar Color Equipo 
const actualizarColor = (color, id) => {

const equiposActualizados = Equipos.map((equipo)=>{
  if(equipo.id === id){
    equipo.colorPrincipal = color
  }
   return equipo
})

actualizarEquipos(equiposActualizados)
}

//Crear Equipos

const crearEquipo  = (nuevoEquipo) =>{
  console.log(nuevoEquipo)
  actualizarEquipos([...Equipos,{...nuevoEquipo, id: uuid()}])
}

const like = (id) =>{
const colaboradoresActualizados = colaboradores.map((colaborador) => {
  if(colaborador.id === id){
    colaborador.fav = !colaborador.fav
  }
  return colaborador
})
actualizarColaboradores(colaboradoresActualizados)
}
  return (
    <div>
      <Header/>
      {/*MostrarFormulario ?  <Formulario equipos = {Equipos.map((equipo)=> equipo.titulo)}/> : <></>*/}
      { MostrarFormulario && <Formulario 
      equipos = {Equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo ={crearEquipo}
      /> 
      }
      <MiOrg  CambiarMostrar = {CambiarMostrar}/>
      {
        Equipos.map((equipo)=> <Equipo 
        datos={equipo} 
        key ={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
       eliminarColaborador = {eliminarColaborador}
       actualizarColor = {actualizarColor}
       like = {like}
        />
        )
      }
         <Footer />
     
    </div>
  );
}

export default App;
