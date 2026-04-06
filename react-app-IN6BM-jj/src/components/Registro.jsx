import { useState } from "react";

export const Registro = () => {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Preciona aquí para registrar tu accion: {contador}</h2>

            <button onClick={() => setContador(contador + 1)}>👻</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>
        </div>
        
    )
}
