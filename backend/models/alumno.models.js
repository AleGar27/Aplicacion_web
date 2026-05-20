import {Schema, model} from "mongoose";

const EsquemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    Materia: String
})   


export const TablaAlumnos = new model("Tabla de alumnos reprobados", EsquemaAlumnos)