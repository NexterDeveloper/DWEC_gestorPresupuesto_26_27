"use strict";

function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    let p = document.createElement('p');
    p.textContent = valor;
    elemento.append(p);
}

function mostrarGastoWeb(idElemento, gasto) {
    let elemento = document.getElementById(idElemento);

    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');
    elemento.append(divGasto);

    let divGastoDescripcion = document.createElement('div');
    divGastoDescripcion.classList.add('gasto-descripcion');
    divGasto.append(divGastoDescripcion);
    let p1 = document.createElement('p');
    p1.textContent = gasto.descripcion;
    divGastoDescripcion.append(p1);

    let divGastoFecha = document.createElement('div');
    divGastoFecha.classList.add('gasto-fecha');
    divGasto.append(divGastoFecha);
    let p2 = document.createElement('p');
    p2.textContent = gasto.fecha;
    divGastoFecha.append(p2);

    let divGastoValor = document.createElement('div');
    divGastoValor.classList.add('gasto-valor');
    divGasto.append(divGastoValor);
    let p3 = document.createElement('p');
    p3.textContent = gasto.valor;
    divGastoValor.append(p3);

    let divGastoEtiquetas = document.createElement('div');
    divGastoEtiquetas.classList.add('gasto-etiquetas');
    divGasto.append(divGastoEtiquetas);

    gasto.etiquetas.forEach(etiqueta => {
        let spanGastoEtiquetasEtiqueta = document.createElement('span');
        spanGastoEtiquetasEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        divGastoEtiquetas.append(spanGastoEtiquetasEtiqueta);
        let p = document.createElement('p');
        p.textContent = etiqueta;
        spanGastoEtiquetasEtiqueta.append(p);
    });

    elemento.append(divGasto);
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    let elemento = document.getElementById(idElemento);
    let divAgrupacion = document.createElement('div');
    divAgrupacion.classList.add('agrupacion');
    elemento.append(divAgrupacion);

    let h1 = document.createElement('h1');
    h1.textContent = `Gastos agrupados por ${periodo}`;
    divAgrupacion.append(h1);

    agrup.forEach(a => {
        let divAgrupacionDato = document.createElement('div');
        divAgrupacionDato.classList.add('agrupacion-dato');
        divAgrupacion.append(divAgrupacionDato);

        let spanAgrupacionDatoClave = document.createElement('span');
        spanAgrupacionDatoClave.classList.add('agrupacion-dato-clave');
        spanAgrupacionDatoClave.textContent = a;
        divAgrupacionDato.append(spanAgrupacionDatoClave);

        let spanAgrupacionDatoValor = document.createElement('span');
        spanAgrupacionDatoValor.classList.add('agrupacion-dato-valor');
        spanAgrupacionDatoValor.textContent = a;
        divAgrupacionDato.append(spanAgrupacionDatoValor);
    });
}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}