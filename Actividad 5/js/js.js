function mostrarMensaje() {
    let numero1;
    let numero2; 
    let a, b, c, d, e;
    numero1 = parseInt(document.getElementById("numero1").value, 10);
    numero2 = parseInt(document.getElementById("numero2").value, 0);
    a = numero1 + numero2;
    b = numero1 - numero2;
    c = numero1 * numero2;
    d = numero1 / numero2;
    e = numero1 % numero2;
    document.getElementById("mensaje").innerHTML = "El primer número es: " + numero1 + "<br>El segundo número es: " + numero2 + "<br>La suma es: " + a + "<br>La resta es: " + b + "<br>El producto es: " + c + "<br>La división es :" + d + "<br>El resto es: " + e;
  
}