//Problema 4: Identificar el día de la semana.
function diaSemana (){
    let dia = document.getElementById('selectedDay').value;
    console.log('dia:: ', dia);
    
    let response = document.getElementById('resultado');

    switch (parseInt(dia)) {
        case 1:
            response.innerText = 'Lunes'
            break;
        case 2:
            response.innerText = 'Martes';
            break;
        case 3:
            response.innerText = 'Miercoles';
            break;
        case 4:
            response.innerText = 'Jueves';
            break;
        case 5:
            response.innerText = 'Viernes';
            break;
        case 6:
            response.innerText = 'Sabado';
            break;
        case 7:
            response.innerText = 'Domingo';
            break;
        default:
            response.innerText = 'El numero suministrado no conrresponde a un dia de la semana';
            break;
    }
}