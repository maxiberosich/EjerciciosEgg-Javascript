/*Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.*/

// LINEA PARA MANEJAR LO QUE OCURRE EN EL BODY
const cuerpo = document.body;

// CREACION DE UNA ETIQUETA H1 E INGRESO DE LO QUE DICE
const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 3";

// ASIGNACION DEL TITULO AL BODY
cuerpo.appendChild(titulo);

// CREACION DE LABEL
const label = document.createElement("label");
label.textContent = "Ingrese su edad ";
label.setAttribute("for","edad");

// CREACION INPUT
const input = document.createElement("input");
input.type = "number";
input.id = "edad";

// CREACION DEL BOTON
const boton = document.createElement("button");
boton.textContent = "Enviar";

// INCORPORACION DEL BOTON, INPUT Y LABEL AL BODY
cuerpo.appendChild(label);
cuerpo.appendChild(input);
cuerpo.appendChild(boton);


let mayor = () => {
    let anios = input.value;
    if(anios > 17 && anios < 120){
        alert("Felicidades, ya puede ir preso.");
    }else if(anios < 18 && anios > 1){
        alert("Aun no puedes salir de joda legalmente, pero aun asi puedes salir XD");
    }else{
        alert("Debes ingresar un numero valido");
    }
}

boton.addEventListener("click",()=>{
    mayor();
});

