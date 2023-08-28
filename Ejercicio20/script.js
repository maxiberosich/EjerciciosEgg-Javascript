/*Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18]*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio20";

body.appendChild(titulo);

const texto = document.createElement("p");
texto.textContent = "Abrir la consola del navegador para ver la resolucion del problema paso a paso";

body.appendChild(texto);

let matriz = [];

for (let i = 1; i <= 5; i++) {
    matriz[i-1] = [i * 3];
}

console.log(matriz);

matriz = matriz.flat(4)

console.log(matriz);

matriz.push((matriz.length + 1) * 3);

console.log(matriz);

matriz.shift();

console.log(matriz);

