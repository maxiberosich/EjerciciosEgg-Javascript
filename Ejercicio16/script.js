/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla. */

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 16";

body.appendChild(titulo);

const textoInformativo = document.createElement("p");
textoInformativo.textContent = "Ingrese el numero que desee para que los vectores se llenen con numeros aleatorios desde 0 hasta el que ingrese."

body.appendChild(textoInformativo);

const input = document.createElement("input");
input.type = "number";

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", ()=>{
    const numeroElegido = input.value;
    let vec = [];
    let vec2 = [];

    for (let i = 0; i < 5; i++) {
        if(i < 4){
            vec = [vec + Math.round((Math.random()*numeroElegido))  + " ,"  ];
            vec2 = [ " ," + Math.round((Math.random()*numeroElegido)) + vec2 ];    
        }else{
            vec = [vec + Math.round((Math.random()*numeroElegido))];
            vec2 = [Math.round((Math.random()*numeroElegido)) + vec2 ];
        }
    }

    const texto = document.createElement("p");
    texto.textContent = `Numero seleccionado: ${numeroElegido} Vector 1: [${vec}] Vector 2: [${vec2}]`;

    body.appendChild(texto);
})


