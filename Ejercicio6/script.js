/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 6";

const label = document.createElement("label");
label.textContent = `Ingrese un numero  `;
label.setAttribute("for","par");

const input = document.createElement("input");
input.id = "par";
input.type = "number";

const p = document.createElement("p");
p.textContent = "Para conocer si un numero es par o impar, ingreselo el el cuadro y luego presione enviar.";

const boton = document.createElement("button");
boton.textContent = `Enviar`;

body.appendChild(titulo);
body.appendChild(p);
body.appendChild(label);
body.appendChild(input);
body.appendChild(boton);

const par = document.createElement("p");
body.appendChild(par);

boton.addEventListener("click", ()=>{
    parOImp();
})


let parOImp = ()=>{
    if((input.value % 2) == 0){
        par.textContent = `Numero par`
    }else{
        par.textContent = `Numero impar`
    }
}

