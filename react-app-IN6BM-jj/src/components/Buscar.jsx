import { useState } from "react"
export const Buscar = ({nombreUno = "Josué", nombreDos = "Jefry", nombreTres = "Roberto"}) => {
    const [busqueda, setBusqueda] = useState("");
  return (
    
    <div>
        <h1>Buscar:</h1>
        <input type="text" placeholder="Buscar..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        <h2>Resultados de búsqueda:</h2>
        <ul>    
            {busqueda === nombreUno && <li>{nombreUno}</li>}
            {busqueda === nombreDos && <li>{nombreDos}</li>}
            {busqueda === nombreTres && <li>{nombreTres}</li>}
        </ul>   
    </div>
  )
}
