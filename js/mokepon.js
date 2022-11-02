let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego (){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',rieniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputhipodogue = document.getElementById('hipodogue')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let spanmascotajugador = document.getElementById('mascota-jugador')
    
    
    
    if(inputhipodogue.checked){
        spanmascotajugador.innerHTML = 'Hipodogue'
    
    }else if(inputcapipepo.checked){
        spanmascotajugador.innerHTML = 'capipepo'
    
    }else if(inputratigueya.checked){
        spanmascotajugador.innerHTML = 'ratigueya'  
    
    }else{
        alert('seleccione una mascota')
    }

    seleccionarMascotaEnemigo()
        
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanmascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if(mascotaAleatorio == 1){
        spanmascotaEnemigo.innerHTML = 'Hipodogue'

    } else if(mascotaAleatorio == 2){
      
        spanmascotaEnemigo.innerHTML = 'capipeo'
    } else{
        spanmascotaEnemigo.innerHTML = 'ratigueya'
    }
 }

function ataqueFuego(){
    ataqueJugador = 'FUEGO' 
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()   
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()   
}

function ataqueAleatorioEnemigo(){
    ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA' 
    
    }else{
        ataqueEnemigo = 'TIERRA' 
    }
    combate()
}

function combate (){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }

    revisarVidas()
    
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("ARAGAN")
    }else if(vidasJugador == 0){
        crearMensajeFinal("PENDEJO")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function rieniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


