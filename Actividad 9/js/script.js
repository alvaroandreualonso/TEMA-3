function Factorial() {
    let numero = parseInt(document.getElementById("numero").value, 10);
    let resultado= 1;
    let iteracion= 1;

    while (iteracion <= numero) {
        iteracion= iteracion + 1;
        resultado = resultado * iteracion;
        }
    document.getElementById("solucion").innerHTML = "El factorial de " + numero + " es " + resultado;
}