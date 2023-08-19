/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

const inputL = document.getElementById("ingresoUsuario");
const boton = document.getElementById("btn");
const texto = document.getElementById("resultadoSuma");

let limite = 0;
let suma = 0;
let contador = 0;

boton.addEventListener("click", function(){
    const valor = parseInt(inputL.value);

    if(isNaN(valor) || valor <= 0){
        alert("Ingresa un valor valido");
        return;
    }

    if(limite === 0){
        limite = valor;
        texto.textContent = `Ingresa numero hasta llegar el limite ${limite}`;
        document.getElementById("mensaje").textContent = "Ingrese un numero";
    }else{
        suma += valor;
        contador++;
        texto.textContent = `La suma hasta el momento es: ${suma}`;

        if(suma >= limite){
            texto.textContent = `Se introdujeron ${contador} numeros para alcanzar o superar el limite`;
            boton.disabled = true;
        }
    }

    inputL.value = "";
})
