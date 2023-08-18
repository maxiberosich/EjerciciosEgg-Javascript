/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

const body = document.body;

const title = document.createElement("h1");
title.textContent = `Ejercicio 4`;
body.appendChild(title);

const label = document.createElement("label");
label.textContent = `Ingrese una letra  `;
label.setAttribute("for","caracter");

const input = document.createElement("input");
input.id = "caracter";
input.type = "text";

const boton = document.createElement("button");
boton.textContent = `Enviar`;

body.appendChild(label);
body.appendChild(input);
body.appendChild(boton);

boton.addEventListener("click", ()=>{
    correcto();
})

let correcto = () =>{
    let valor = input.value;
    if(valor == "s" || valor == "n" || valor == "S" || valor == "N"){       
        alert("Correcto pa!!!!");        
    }else{
        alert("Nop, no es correcto, sorry");
    }
}
