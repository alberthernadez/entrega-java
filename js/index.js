let valorFijo = 0
let tipoNavegador = 0
let aj = 0
let alerta = false
let factorAlerta = 1

let mensajePrincipal = "¿en que navegador desea descargar el programa \n" +
    "1) Google Chrome \n" +
    "2) Opera \n" +
    "3) Microsoft Edge\n" +
    " \n" +
    "Ingresa el nro. de tu interés."

let quieroDescargar = true
while (quieroDescargar) {
    iniciarCotizacion()
    quieroDescargar = confirm("Si no se inicio la descarga dele aceptar y se volvera a descargar")
}

function iniciarCotizacion() {
    tipoNavegador= parseInt(prompt(mensajePrincipal))

    if (tipoNavegador !== 1 && tipoNavegador !== 2 && tipoNavegador !== 3) {
        alert("⛔️ Error en el dato ingresado.")
    } else {
        alerta = confirm("¿Seguro que desea descargar?")
        if (alerta === false) {
            factorAlerta = 1
        }
        }
    }
