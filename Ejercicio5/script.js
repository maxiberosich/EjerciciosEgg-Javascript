/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

const body = document.body;

const titlee = document.createElement("h1");
titlee.textContent = `Ejercicio 5`;
body.appendChild(titlee);

// DIV
const div = document.createElement("div");
div.classList.add("formulario");

// NUMERO 1º
const label = document.createElement("label");
label.textContent = `Ingrese el primer numero  `;
label.setAttribute("for","numero1");

const input = document.createElement("input");
input.id = "numero1";
input.type = "number";


// NUMERO 2º
const label2 = document.createElement("label");
label2.textContent = `Ingrese el segundo numero  `;
label2.setAttribute("for","numero2");

const input2 = document.createElement("input");
input2.id = "numero2";
input2.type = "number";


// OPERACION
const label3 = document.createElement("label");
label3.textContent = `Ingrese la operacion  `;
label3.setAttribute("for","operacion");

const input3 = document.createElement("input");
input3.id = "operacion";
input3.type = "text";


div.appendChild(label);
div.appendChild(input);
div.appendChild(label2);
div.appendChild(input2);
div.appendChild(label3);
div.appendChild(input3);

body.appendChild(div);

// BOTON PARA ENVIAR LOS NUMEROS Y LA OPERACION
const boton = document.createElement("button");
boton.textContent = `Enviar`;
body.appendChild(boton);

const texto = document.createElement("p");
texto.textContent = `Ingrese la letra de la operacion que quiera
S - SUMAR
R - RESTAR
M - MULTIPLICAR
D - DIVIDIR`;
body.appendChild(texto);

boton.addEventListener("click",()=>{
    calculadora();
})

let calculadora = () =>{
    let n1 = parseInt(input.value);
    let n2 = parseInt(input2.value);
    let op = input3.value;
    switch (op) {
        case "s":
        case "S":
            alert(`El resultado de la suma es ${n1 + n2} `);
            break;
        case "r":
        case "R":
            alert(`El resultado de la resta es ${n1-n2}`);
            break;
        case "d":
        case "D":
            alert(`El resultado de la division es ${n1/n2}`);
            break;
        case "m":
        case "M":
            alert(`El resultado de la multiplicacion es ${n1*n2}`);
            break;
        default:
            alert("Debe ingresar una opcion valida");
            break;
    }
}

