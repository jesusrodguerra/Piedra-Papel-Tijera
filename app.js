const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const divGanaste = document.getElementById('user-score');
const divEmpate = document.getElementById('empate-score');
const divPerdiste = document.getElementById('bot-score');

let resultado = '';
let ganaste = 0;
let perdiste = 0;
let empate = 0;

    
function botJuega() {
    const jugadas = ['piedra', 'papel', 'tijera'];
    const numeroAleatorio = Math.random() * (3)
    const numero = Math.floor(numeroAleatorio)
    const botJugada = jugadas[numero]

    if(botJugada === 'piedra') {
        document.getElementById('bot').setAttribute('class', 'far fa-hand-rock')

    } else if(botJugada === 'papel') {
        document.getElementById('bot').setAttribute('class', 'far fa-hand-paper')

    } else {
        document.getElementById('bot').setAttribute('class', 'far fa-hand-scissors')

    }

    return botJugada
}


function jugar(jugador, bot) {

    const jugadorJuega = jugador;
    const botJuega = bot;

    console.log(jugadorJuega + botJuega)

    switch (jugadorJuega + botJuega) {
        case 'piedrapiedra':
        case 'tijeratijera':
        case 'papelpapel':
            resultado = 'empate'
            result(resultado);
            break;
        
        case 'piedratijera':
        case 'tijerapapel':
        case 'papelpiedra':
            resultado = 'ganaste'
            result(resultado);
            break;
        
        case 'tijerapiedra':
        case 'papeltijera':
        case 'piedrapapel':
            resultado = 'perdiste'
            result(resultado);
            break;
    
        default:
            break;
    }
}

function result(resultado) {

    if(resultado === 'ganaste') {
        ganaste++;
        divGanaste.innerHTML = ganaste;
        return
    } else if(resultado === 'perdiste') {
        perdiste++
        divPerdiste.innerHTML = perdiste
        return
    } else if(resultado === 'empate') {
        empate++
        divEmpate.innerHTML = empate
        return 
    }

}

piedra.addEventListener('click', ()=> {
    const jugador_jugada = piedra.getAttribute('id');

    document.getElementById('jugador').setAttribute( "class", "far fa-hand-rock")

    const bot = botJuega()
    jugar(jugador_jugada, bot)
})

papel.addEventListener('click', ()=> {
    const jugador_jugada = papel.getAttribute('id');

    document.getElementById('jugador').setAttribute( "class", "far fa-hand-paper")

    const bot = botJuega()
    jugar(jugador_jugada, bot)
})

tijera.addEventListener('click', ()=> {
    const jugador_jugada = tijera.getAttribute('id');

    document.getElementById('jugador').setAttribute("class", "far fa-hand-scissors")

    const bot = botJuega()
    jugar(jugador_jugada, bot)
})
