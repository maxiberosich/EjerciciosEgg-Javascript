/*Escribir una función flecha que reciba una palabra y la devuelva al revés. */

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 10";

body.appendChild(titulo);

const label = document.createElement("label");
label.textContent = "Ingrese una palabra o frase ";

const input = document.createElement("input");
input.type = "text";

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(label);
body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", ()=>{
    const texto = document.createElement("p");

    for (let i = input.value.length; i >= 0; i--) {
        texto.textContent += input.value.substring(i,i-1) + " ";
    }
    body.appendChild(texto);
})
