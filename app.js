let jugadorScore = 0;
let botScore = 0;
let empateScore = 0;
const jugador_jugada = document.getElementById('jugador');
const bot_jugada = document.getElementById('bot');
const userScore_span = document.getElementById('user-score');
const botScore_span = document.getElementById('bot-score');
const empate_span = document.getElementById('empate-score');
const scoreBoard = document.getElementById('marcador');
const result_div = document.querySelector('.result p');
const piedra_div = document.getElementById('rock');
const papel_div = document.getElementById('paper');
const tijera_div = document.getElementById('tijera');

function bot(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const aleatorio = Math.random() * (3);
    const numero = Math.floor(aleatorio)
    const bot_jugada = opciones[numero]
    
    return bot_jugada
}

function ganar(opcionJugador, opcionBot){
    jugadorScore++;
    userScore_span.innerHTML = jugadorScore

    if(opcionJugador === 'piedra'){
        jugador_jugada.className = 'far fa-hand-rock';
    } else if(opcionJugador === 'papel'){
        jugador_jugada.className = 'far fa-hand-paper';
    } else {
        jugador_jugada.className = 'far fa-hand-scissors'
    }

    if(opcionBot === 'piedra'){
        bot_jugada.className = 'far fa-hand-rock';
    } else if(opcionBot=== 'papel'){
        bot_jugada.className = 'far fa-hand-paper';
    } else {
        bot_jugada.className = 'far fa-hand-scissors';
    }

    console.log(opcionJugador)
}

function perder(opcionJugador, opcionBot){
    botScore++
    botScore_span.innerHTML = botScore

    if(opcionJugador === 'piedra'){
        jugador_jugada.className = 'far fa-hand-rock';
    } else if(opcionJugador === 'papel'){
        jugador_jugada.className = 'far fa-hand-paper';
    } else {
        jugador_jugada.className = 'far fa-hand-scissors'
    }

    if(opcionBot === 'piedra'){
        bot_jugada.className = 'far fa-hand-rock';
    } else if(opcionBot=== 'papel'){
        bot_jugada.className = 'far fa-hand-paper';
    } else {
        bot_jugada.className = 'far fa-hand-scissors';
    }

    console.log(typeof opcionJugador)
}

function empate(opcionJugador, opcionBot){
    empateScore++
    empate_span.innerHTML = empateScore

    if(opcionJugador === 'piedra'){
        jugador_jugada.className = 'far fa-hand-rock';
    } else if(opcionJugador === 'papel'){
        jugador_jugada.className = 'far fa-hand-paper';
    } else {
        jugador_jugada.className = 'far fa-hand-scissors'
    }

    if(opcionBot === 'piedra'){
        bot_jugada.className = 'far fa-hand-rock';
    } else if(opcionBot=== 'papel'){
        bot_jugada.className = 'far fa-hand-paper';
    } else {
        bot_jugada.className = 'far fa-hand-scissors';
    }
    console.log(opcionJugador)
}

function game(opcion){
    const bot_juega = bot();
    const usuario_juega = opcion

    switch(usuario_juega + bot_juega){
        
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            ganar(usuario_juega, bot_juega)
            console.log('Jugador Gana')
        break;
        case 'piedrapapel':
        case 'tijerapiedra':
        case 'papeltijera':
            perder(usuario_juega, bot_juega)
            console.log('Bot Gana')
        break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            empate(usuario_juega, bot_juega)
            console.log('Empate')
        break;
    }

    console.log(`${usuario_juega} vs ${bot_juega}`)
}

function botones(){
    piedra_div.addEventListener('click', () => game('piedra'));
    papel_div.addEventListener('click', () => game('papel'));
    tijera_div.addEventListener('click', () => game('tijera'));
}

botones();