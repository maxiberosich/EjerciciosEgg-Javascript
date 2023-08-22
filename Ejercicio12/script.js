/*Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 12";

body.appendChild(titulo);

const label = document.createElement("label");
label.textContent = "Ingrese una letra, frase o numero";

const input = document.createElement("input");
input.type = "text";

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(label);
body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", ()=>{
    const valor = input.value;
    const texto = document.createElement("p");
    if(!(/^\d+$/.test(valor))){
        texto.textContent = `El tipo de dato de ${valor} es: ${typeof(valor)} `;
    }else{
        texto.textContent = `El tipo de dato de ${valor} es: ${typeof(parseInt(valor))}`;
    }
    body.appendChild(texto);
})
