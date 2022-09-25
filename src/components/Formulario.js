import React, { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

const Formulario = () => {

    const [listaColaboradores, setListaColaboradores]= useState(BaseColaboradores)
    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevoCorreo, setNuevoCorreo] = useState("")

    const envioFormulario = (e) => {
        e.preventDefault()
        setListaColaboradores([...listaColaboradores, {nombre: nuevoNombre, correo: nuevoCorreo}])
        setNuevoNombre("")
        setNuevoCorreo("")
    }

    const inputNombre = (e) => {
        setNuevoNombre(e.target.value)
    }
    
    const inputCorreo = (e) => {
        setNuevoCorreo(e.target.value)
    }

    const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState("");
    const inputBuscador = (e) => {
        setColaboradoresFiltrados(e.target.value)    
    }

    return (
        <div>
            <div id="buscar">
                <h4 id="titulo-buscar">Buscador de colaboradores</h4>
                <input
                id="input-buscar"
                type="search"
                placeholder="Busca un colaborador"
                onChange={inputBuscador}/>
            </div>

            <form onSubmit={envioFormulario}>
                <input 
                id="input-nombre"
                type="text" 
                placeholder="Ingresa nombre del colaborador"
                onChange={inputNombre}
                value={nuevoNombre}/>

                <input 
                id="input-email"
                type="email"
                placeholder="Ingresa correo del colaborador"
                onChange={inputCorreo}
                value={nuevoCorreo}
                />

                <button id="btn-agregar">Agregar colaborador</button>
            </form>

            <h4>Lista de colaboradores</h4>
            <ul id="lista-resultado">
                {listaColaboradores
                .filter(colaborador =>
                colaborador.nombre.includes
                (colaboradoresFiltrados))
                .map(colaborador => 
                <li key={colaborador.id}>
                    {colaborador.nombre} - {colaborador.correo}
                </li> )}

            </ul>

        </div>
        
    )

};

export default Formulario;