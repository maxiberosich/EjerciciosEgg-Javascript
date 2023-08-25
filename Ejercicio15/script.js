/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

const body = document.body;

const titulo = document.createElement("h1");
titulo.textContent = "Ejercicio 15";

body.appendChild(titulo);

const txt = document.createElement("p");
txt.textContent = "Para poder sacar el area o perimetro de un circulo, debe ingresar el radio del mismo, y luego presionar el boton que desee";

body.appendChild(txt);

const label = document.createElement("label");
label.textContent = "radio "

const input = document.createElement("input");
input.type = "number";

const botonArea = document.createElement("button");
botonArea.textContent = "Area";

const botonPerimetro = document.createElement("button");
botonPerimetro.textContent = "Perimetro";

body.appendChild(label);
body.appendChild(input);
body.appendChild(botonArea);
body.appendChild(botonPerimetro);

const Pi = Math.PI;

botonArea.addEventListener("click",()=>{
    const p = document.createElement("p");

    p.textContent= `El area del circuo con radio ${input.value} es: ${Pi * Math.pow(input.value,2)}`

    body.appendChild(p);
})

botonPerimetro.addEventListener("click",()=>{
    const pe = document.createElement("p");

    pe.textContent= `El perimetro del circuo con radio ${input.value} es: ${Pi * input.value * 2}`

    body.appendChild(pe);
})
