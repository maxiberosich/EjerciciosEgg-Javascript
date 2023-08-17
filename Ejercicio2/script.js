/*Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio */

const Pi = Math.PI;

let calcArea = () =>{
    document.getElementById("calculoArea").textContent = Pi * Math.pow(document.getElementById("radio").value,2);
}

let calcPerimetro = () =>{
    document.getElementById("calculoPer").textContent = 2 * Pi * document.getElementById("radioP").value;
}
