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




div.appendChild(label);
div.appendChild(input);
div.appendChild(label2);
div.appendChild(input2);

// CREACION DE LOS DIFERENTES INPUTS DE TIPO RADIO
const opciones = [
    {nombre: `suma`, etiqueta: "Suma"},
    {nombre: `resta`, etiqueta: "Resta"},
    {nombre: `division`, etiqueta: "Division"},
    {nombre: `multiplicacion`, etiqueta: "Multiplicacion"}
]

for (const opc of opciones) {
    const inputInfo = document.createElement("input");
    inputInfo.name = "operacion";
    inputInfo.type = "radio";
    inputInfo.value = opc.nombre;

    const label3 = document.createElement("label");
    label3.textContent = opc.etiqueta;

    div.appendChild(label3);
    div.appendChild(inputInfo);
}

body.appendChild(div);

// BOTON PARA ENVIAR LOS NUMEROS Y LA OPERACION
const boton = document.createElement("button");
boton.textContent = `Enviar`;
body.appendChild(boton);


boton.addEventListener("click",()=>{
    calculadora();
})

let calculadora = () =>{
    let n1 = parseInt(input.value);
    let n2 = parseInt(input2.value);

    const opcio = document.querySelectorAll('input[type="radio"]');
    for(const opci of opcio){
        if(opci.checked){
            const opcS = opci.value;
            switch (opcS) {
                case "suma":
                    alert(`El resultado de la suma es ${n1 + n2} `);
                    break;
                case "resta":
                    alert(`El resultado de la resta es ${n1-n2}`);
                    break;
                case "division":
                    alert(`El resultado de la division es ${n1/n2}`);
                    break;
                case "multiplicacion":
                    alert(`El resultado de la multiplicacion es ${n1*n2}`);
                    break;
                default:
                    alert("Debe ingresar una opcion valida");
                    break;
            }
        }
    }
    
}

