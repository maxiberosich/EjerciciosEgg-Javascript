/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

var numeros = [];
const num = document.getElementById("ingresoUsuario");
const boton = document.getElementById("btn");

boton.addEventListener("click",ingreso);

function agregarNumeros() {
    numeros.push(parseInt(num.value));
    num.value = '';
    console.log(numeros);
}

function mostrarCalculos(){
    let maxim = numeros[0];
    let minim = numeros[0];
    let sumas = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        maxim = Math.max(numeros[i],maxim);
        minim = Math.min(numeros[i],minim);  
        sumas += numeros[i];      
    }

    let prom = sumas / numeros.length;

    document.querySelector('.resultado-1').innerHTML = `El numero mas grande ingresado es: ${maxim}`;
    document.querySelector('.resultado-2').innerHTML = `El numero mas bajo ingresado es: ${minim}`;
    document.querySelector('.resultado-3').innerHTML = `El promedio de los numeros ingresados es: ${prom}`;
    boton.remove();
    num.remove();
    document.getElementById("label").remove();
    document.getElementById("titulo").remove();
}

function ingreso() {
    if(numeros.length === 0 && num.value <= 0){
        alert("Debe ingresar al menos un numero")
    }else if(num.value == 0){
        mostrarCalculos();
    }else{
        agregarNumeros();
    }
}