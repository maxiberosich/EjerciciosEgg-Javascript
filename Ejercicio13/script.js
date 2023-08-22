/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

let mujer = {
    nombre: "Martha",
    edad: 37,
    sexo: 'F',
    peso: 70,
    altura: 160
}
let hombre = {
    nombre: "Thomas",
    edad: 40,
    sexo: 'M',
    peso: 80,
    altura: 180
}
let otro = {
    nombre: "Bruce",
    edad: 12,
    sexo: 'M',
    peso: 25,
    altura: 110
}

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 13";

body.appendChild(titulo);

const texto = document.createElement("p");
texto.textContent = "Seleccione una de las personas y luego presione Enviar para conocer los datos de dicha persona";

body.appendChild(texto);

const opciones = [
    {nombre: `Martha`, etiqueta: "Mujer"},
    {nombre: `Thomas`, etiqueta: "Hombre"},
    {nombre: `Bruce`, etiqueta: "Otro"}
]

for (const opc of opciones) {
    const inputInfo = document.createElement("input");
    inputInfo.type = "radio";
    inputInfo.name = "opciones"
    inputInfo.value = opc.nombre;

    const label = document.createElement("label");
    label.textContent = opc.etiqueta;

    body.appendChild(inputInfo);
    body.appendChild(label);
}

const boton = document.createElement("button");
boton.textContent = "Enviar";

body.appendChild(boton);

const textoF = document.createElement("p");

body.appendChild(textoF);

boton.addEventListener("click", ()=>{
    const opciones = document.getElementsByName("opciones");
    
    let eleccion = "";

    for(const opc of opciones){
        if(opc.checked){
            eleccion = opc.value;
        }
    }

    if(hombre.nombre === eleccion){
        textoF.textContent = `Nombre: ${hombre.nombre}
        Edad: ${hombre.edad}
        Altura: ${hombre.altura}
        Peso: ${hombre.peso}
        Sexo: ${hombre.sexo}`
    }else if(mujer.nombre === eleccion){
        textoF.textContent = `Nombre: ${mujer.nombre}
        Edad: ${mujer.edad}
        Altura: ${mujer.altura}
        Peso: ${mujer.peso}
        Sexo: ${mujer.sexo}`
    }else {
        textoF.textContent = `Nombre: ${otro.nombre}
        Edad: ${otro.edad}
        Altura: ${otro.altura}
        Peso: ${otro.peso}
        Sexo: ${otro.sexo}`
    }   

})
