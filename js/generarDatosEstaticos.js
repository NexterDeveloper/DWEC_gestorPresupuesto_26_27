"use strict";

import * as gp from './gestionPresupuesto.js';
import * as gpw from './gestionPresupuestoWeb.js';

gp.actualizarPresupuesto(1500);
let valorPresupuesto = gp.mostrarPresupuesto();
gpw.mostrarDatoEnId('presupuesto', valorPresupuesto);