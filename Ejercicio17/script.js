/*Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 17";

body.appendChild(titulo);

let vec = ["sopa","sapo","paso","posa","aosp", "oasp"];

const text = document.createElement("p");
text.textContent = `Vector inicial [${vec}]`;

for (let i = 0; i < 2; i++) {
    vec.pop();    
}

const text2 = document.createElement("p");
text2.textContent = `Vector con los ultimos 2 elementos eliminados [${vec}]`;

body.appendChild(text);
body.appendChild(text2);
