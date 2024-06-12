let ropa =["franela","pantalon","gorra",];
let configuracion ={ valorfijo: 0, tipoRopa: 0, aj: 0, alerta: false, factorAlerta: 1 };
let talla = ["m", "s", "x", "xl"]

let mensajePrincipal = "¿que ropas desea comprar?\n" + 
    "1) " + ropa [0] + "\n" + 
    "2) " + ropa [1] + "\n" + 
    "3) " + ropa [2] + "\n" + 
    "\nIngresa el numero de tu interes";

let quieroComprar = true;
while (quieroComprar) {
    iniciarCotizacion(); 
    quieroComprar = confirm(prompt("¿que talla desea llevar?\n" +
        "1) " + talla[0] + "\n" +
        "2) " + talla[1] + "\n" +
        "3) " + talla[2] + "\n" +
        "4) " + talla[3] + "\n" +
        "\nIngresa el número de tu interés."
        
    ));
}
function iniciarCotizacion() {
    configuracion.tipoRopa = parseInt(prompt(mensajePrincipal))

    if (configuracion.tipoRopa <1 || configuracion.tipoRopa >3){
        alert("⛔ Error en el dato ingresado.");
    } else {
        configuracion.alerta = confirm("pon un numero");
        if (configuracion.alerta === false){
            configuracion.factorAlerta = 1;
        }
}





}