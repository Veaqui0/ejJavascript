//Problema 4: Identificar el día de la semana.
function diaSemana (){
    let dia = document.getElementById('selectedDay').value;
    let response = document.getElementById('resultado');

    switch (dia) {
        case 1:
            response.innerText = 'Lunes'
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sabado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('El numero suministrado no conrresponde a un dia de la semana');
            break;
    }
}