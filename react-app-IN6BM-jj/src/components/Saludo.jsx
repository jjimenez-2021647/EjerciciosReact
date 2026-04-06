import { Datos } from "./Datos"
export const Saludo = ({fantasma}) => {

    return (
    <div>
        <h1>Bienvenido</h1>
        <Datos nombre="Josué" apellido="Jiménez" />
        <h1>{fantasma}</h1>
    </div>
)
}
