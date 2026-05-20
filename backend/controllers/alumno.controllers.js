import { TablaAlumnos } from "../models/alumno.models.js";

TablaAlumnos.create({
    nombre: "Juan",
    calificacion: 5,
    Materia: "Matematicas"
})

export const test = () => console.log("Si se esta llamando al controlador")