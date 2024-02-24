function Comprobar() {
    let nota;
    nota = parseInt(document.getElementById("nota").value);
    if(nota<=10){
        if(nota >8)
            document.getElementById("solucion").innerHTML = "Sobresaliente";
        else if (nota >=7)
            document.getElementById("solucion").innerHTML = "Notable";
        else if (nota >=6)
            document.getElementById("solucion").innerHTML = "Bien";
        else if (nota >=5)
            document.getElementById("solucion").innerHTML = "Suficiente";
        else {
            document.getElementById("solucion").innerHTML = "Suspenso";
        }
    }
        else {
            document.getElementById("solucion").innerHTML = "El número que has puesto no es válido"
        }
}