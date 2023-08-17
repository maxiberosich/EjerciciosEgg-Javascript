/* . Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. */

//Solucion con un prompt, no es la forma mas optima de resolverlo

/*let dia = prompt("¿Que tal esta el dia hoy?","ingrese aqui");
alert(`El dia esta ${dia}`);*/

//Solucion utilizando el DOM

const ingresoUsuario = document.getElementById("ingreso");

let mostrarDia = () =>{
    document.getElementById("mensaje").textContent = `El dia de hoy está ${ingresoUsuario.value}, que mejor?`;
}

