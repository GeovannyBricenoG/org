import { useState } from "react"
import  "./MiOrg.css"

const MiOrg = (props) =>{

   /*const ManejarClick = () =>{

    }*/
    return <section className="Org-Section">
       <h3>Mi Orgianización</h3>
       <img src="/img/Bton_Add.png" alt="Add" onClick={props.CambiarMostrar}/>

    </section>
}

export default  MiOrg