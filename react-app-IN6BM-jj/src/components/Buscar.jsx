import { useState } from "react";

export const Buscar = ({ nombres = ["Josué", "Jefry", "Roberto"] }) => {
  const [busqueda, setBusqueda] = useState("");

  const resultados = nombres.filter((nombre) =>
    nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div>
      <h1>Buscar:</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {busqueda && (
        <p>
          Buscando: <strong>{busqueda}</strong>
        </p>
      )}

      <h2>Resultados de búsqueda:</h2>
      <ul>
        {busqueda === "" ? null : resultados.length === 0 ? (
          <li>Sin resultados</li>
        ) : (
          resultados.map((nombre, i) => <li key={i}>{nombre}</li>)
        )}
      </ul>
    </div>
  );
};
