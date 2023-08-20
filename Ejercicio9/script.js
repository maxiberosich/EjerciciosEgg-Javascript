/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). */

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 9";

const label = document.createElement("label");
label.textContent = "Escriba una frase o palabra  ";

const input = document.createElement("input");
input.type = "text";

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(titulo);
body.appendChild(label);
body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", ()=>{
    const frase = input.value;
    const texto = document.createElement("p");

    for(i=0;i<frase.length;i++){
        texto.textContent += frase.substring(i,i+1) + " ";
    }
    body.appendChild(texto);
})
