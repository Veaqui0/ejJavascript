
 function calcular() {
    let numero = document.getElementById('numero').value; // Obtener el valor del input
    numero = parseInt(numero); // Convertir el valor a un número entero

    let resultado; // Variable para almacenar el resultado

    if (numero % 3 == 0 && numero % 5 == 0) {
        resultado = `El número ${numero} es divisible por 3 y por 5.`; // Si es divisible por 3 y 5
    } else if (numero % 3 == 0) {
        resultado = `El número ${numero} es divisible solo por 3.`; // Si es divisible solo por 3
    } else if (numero % 5 == 0) {
        resultado = `El número ${numero} es divisible solo por 5.`; // Si es divisible solo por 5
    } else {
        resultado = `El número ${numero} no es divisible ni por 3 ni por 5.`; // Si no es divisible ni por 3 ni por 5
    }

    // Mostrar el resultado en el div de resultados
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
