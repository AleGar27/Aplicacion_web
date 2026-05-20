import mongoose from 'mongoose';  //libreria para conectarse comn mongo DB//
import dotenv from 'dotenv';  // libreria para poder llamar mi archivo .env//
import express from 'express';  //libtreria para crear el servidor//
import cors from 'cors';  //libreria para segutridad en el server//
import {test } from "./backend/controllers/alumno.controllers.js";//importando el controlador para probarlo//

dotenv.config(); 
mongoose.connect(process.env.url_bd)
.then(() => console.log('conectado a la base de datos'))
.catch((error) => console.log("No jalo esta madre"))

//Creando un servidor local//
const app = express();
app.use(cors());

app.listen(4000, () => console.log("Funciona el servidor"))

test ();