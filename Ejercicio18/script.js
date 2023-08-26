/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores = [true, 5, false, "hola", "adios", 2];

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 18"

body.appendChild(titulo);

let palabraMas = "";
let numeros = [];
let booleanos = [];

for (let i = 0; i < valores.length; i++) {
    if(typeof(valores[i]) == 'string'){
        palabraMas = valores[i];
        if(valores[i] > palabraMas){
            palabraMas = valores[i];
        }
    }else if(typeof(valores[i]) == 'boolean'){
        booleanos += valores[i];        
    }else if(typeof(valores[i]) == 'number'){
        numeros += valores[i];
    }
}

let sum = parseInt(numeros[0]) + parseInt(numeros[1]);

const texto = document.createElement("p");
texto.textContent = `Array inicial [${valores}]
  Palabra mas larga del array: ${palabraMas},
  boolean: ${booleanos.slice(0,4)}, boolean: ${booleanos.slice(4,9)}
  Suma: ${sum}
  Resta: ${numeros[0] - numeros[1]}
  Multiplicacion: ${numeros[0] * numeros[1]}
  Division: ${numeros[0] / numeros[1]}`;

body.appendChild(texto);
