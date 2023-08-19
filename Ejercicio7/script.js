/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

let limite = parseInt(document.getElementById("ingresoUsuario").value);
var suma = 0;

document.getElementById("btn").onclick = () => {
    document.getElementById("ingresoUsuario").value = 0;
    document.getElementById("mensaje").textContent = "Ingrese un numero";
    suma = parseInt(document.getElementById("ingresoUsuario").value) + suma;
    document.getElementById("resultadoSuma").textContent = `la suma de los numeros ingresados hasta el momento es : ${suma}`;
}
