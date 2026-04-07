import { useEffect } from "react"

export const Acceso = () => {

    useEffect(() => {
        console.log("Usuario ha ingresado al sistema:", new Date().toLocaleString());
    }, []); 

    return (
        <div>
            <h2>Bienvenido al sistema</h2>
            <p>Tu acceso ha sido registrado en la consola.</p>
        </div>
    )
}