import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Saludo } from "./components/Saludo.jsx";
import App from "./App.jsx";
import "./index.css";
import { Contador } from "./components/Contador.jsx";
import { Efecto } from "./components/Efecto.jsx";
import { Estudiante } from "./components/Estudiante.jsx";
import { Curso } from "./components/Curso.jsx";
import { Registro } from "./components/Registro.jsx";
import { Buscar } from "./components/Buscar.jsx";
import { Acceso } from "./components/Acceso.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Saludo />
    <App />
    <Contador />
    <Efecto />
    <Estudiante />
    <Curso />
    <Registro />
    <Buscar />
    <Acceso />
  </StrictMode>,
);
