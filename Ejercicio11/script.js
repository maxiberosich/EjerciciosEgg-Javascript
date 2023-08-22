/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 11";

body.appendChild(titulo);

const txto = document.createElement("p");
txto.textContent = "Usted debera escribir una frase, y luego presionar el boton de enviar, le devolveremos cual fue la palabra mas larga que haya escrito."

body.appendChild(txto);

const input = document.createElement("input");
input.type = "text";

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", () => {
    
    const frase = input.value;
    const nf = document.createElement("p");

    // Separar por espacios
    const separadaPorEspacios = frase.split(" ");

    // Suponer que la palabra más larga es la primera, para poder inicializar la variable
    let palabraMasLarga = separadaPorEspacios[0];

    // Recorrer e ir comparando
    for (const palabra of separadaPorEspacios) {
        if (palabra.length >= palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
	nf.textContent = (palabraMasLarga);
    body.appendChild(nf);
});
