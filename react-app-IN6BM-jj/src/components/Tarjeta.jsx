export const Tarjeta = ({ nombre, profesor, horario }) => {
  return (
    <div>
        <h2>Tarjeta de Curso</h2>
      <h2>Curso: {nombre}</h2>
      <p>Docente: {profesor}</p>
      <p>Horario: {horario}</p>
    </div>
  )
}
