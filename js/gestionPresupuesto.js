"use strict";
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor) {
    if (typeof valor === "number" && valor >= 0 && !Number.isNaN(valor)) {
        presupuesto = valor;
        return presupuesto;
    }

    console.error("Error: El presupuesto debe ser un número no negativo");
    return -1;
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion;

    if (typeof valor === "number" && valor >= 0 && !Number.isNaN(valor)) {
        this.valor = valor;
    } else {
        this.valor = 0;
    }

    // La fecha se guarda como timestamp. Si no se indica o no es válida, se usa la fecha actual
    let timestamp = Date.parse(fecha);
    this.fecha = Number.isNaN(timestamp) ? Date.now() : timestamp;

    this.etiquetas = [];

    this.mostrarGasto = function () {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    };

    this.actualizarDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };

    this.actualizarValor = function (valor) {
        if (typeof valor === "number" && valor >= 0 && !Number.isNaN(valor)) {
            this.valor = valor;
        }
    };

    this.mostrarGastoCompleto = function () {
        let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`;
        texto += `Fecha: ${new Date(this.fecha).toLocaleString()}\n`;
        texto += "Etiquetas:\n";

        for (let etiqueta of this.etiquetas) {
            texto += `- ${etiqueta}\n`;
        }

        return texto;
    };

    this.actualizarFecha = function (fecha) {
        let timestamp = Date.parse(fecha);

        if (!Number.isNaN(timestamp)) {
            this.fecha = timestamp;
        }
    };

    this.anyadirEtiquetas = function (...nuevasEtiquetas) {
        for (let etiqueta of nuevasEtiquetas) {
            // Solo se añade si no existe ya, para evitar duplicados
            if (!this.etiquetas.includes(etiqueta)) {
                this.etiquetas.push(etiqueta);
            }
        }
    };

    this.borrarEtiquetas = function (...etiquetasABorrar) {
        this.etiquetas = this.etiquetas.filter(
            (etiqueta) => !etiquetasABorrar.includes(etiqueta)
        );
    };

    // Las etiquetas recibidas en el constructor se añaden con el propio método del objeto
    this.anyadirEtiquetas(...etiquetas);
}

function listarGastos() {
    return gastos;
}

function anyadirGasto() {
}

function borrarGasto() {
}

function calcularTotalGastos() {
}

function calcularBalance() {
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}