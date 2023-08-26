/*Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 19";

body.appendChild(titulo);

let vectorA = [];
let vectorB = [];

for (let i = 0; i < 50; i++) {
    vectorA[i] = Math.round(Math.random()*15);    
}

const textVectorA = document.createElement("p");
textVectorA.textContent = `1º Vector original: [${vectorA}]`;

body.appendChild(textVectorA);

function comparaNumeros (a,b) {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a == b) return 0;
}

vectorA.sort(comparaNumeros);

const textVectorAOrd = document.createElement("p");
textVectorAOrd.textContent = `1º Vector ordenado: [${vectorA}]`;

body.appendChild(textVectorAOrd);

for (let i = 0; i < 10; i++) {
    vectorB[i] = vectorA[i];    
}

for (let i = vectorB.length; i < 20; i++) {
    vectorB[i] = 0.5;    
}

const textVectorB = document.createElement("p");
textVectorB.textContent = `2º Vector creado: [${vectorB}]`;

body.appendChild(textVectorB);
