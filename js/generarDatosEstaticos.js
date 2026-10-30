"use strict";

import * as gp from './gestionPresupuesto.js';
import * as gpw from './gestionPresupuestoWeb.js';

gp.actualizarPresupuesto(1500);
let valorPresupuesto = gp.mostrarPresupuesto();
gpw.mostrarDatoEnId('presupuesto', valorPresupuesto);

gp.anyadirGasto(new gp.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida"));
gp.anyadirGasto(new gp.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"));
gp.anyadirGasto(new gp.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte"));
gp.anyadirGasto(new gp.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"));
gp.anyadirGasto(new gp.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"));
gp.anyadirGasto(new gp.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros"));

gpw.mostrarDatoEnId('gastos-totales', gp.calcularTotalGastos());

gpw.mostrarDatoEnId('balance-total', gp.calcularBalance());

