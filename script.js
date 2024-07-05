const btn_iniciar = document.querySelector(".button-start")
const btn_parar = document.querySelector(".button-stop")
const btn_reiniciar = document.querySelector(".button-reload")
const textoTempo = document.querySelector('p')
let cron

let segundos = 0
let minutos = 0
let horas = 0


function iniciar(){
    parar()
    cron = setInterval(contar, 1000)
}
function parar(){
    clearInterval(cron)
}

function reiniciar(){
    parar()
    clearInterval(cron)
    segundos = 0
    minutos = 0
    horas = 0
    textoTempo.innerText = '00:00'
    
}

function contar(){
    segundos++
    if(segundos > 59){
        minutos++
        segundos = 0
    }
    if(minutos > 59){
        horas++
        minutos = 0
    }

    mostrarTempo()
}


function mostrarTempo()
{
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos
    const horasFormatadas = horas <10 ? '0' + horas : horas

    textoTempo.innerText = horas > 0 ?`${horasFormatadas}:${minutosFormatados}.${segundosFormatados}` :`${minutosFormatados}:${segundosFormatados}`

}

btn_iniciar.addEventListener('click', () =>{
     btn_iniciar.classList.toggle("hidden")
     btn_parar.classList.remove("hidden") 
     btn_reiniciar.classList.remove("hidden")
    iniciar()
    
})

btn_parar.addEventListener('click', () =>{
    btn_iniciar.classList.toggle("hidden")
    parar()
})

btn_reiniciar.addEventListener('click', () =>{
    btn_iniciar.classList.remove("hidden")
    btn_parar.classList.add("hidden") 
    btn_reiniciar.classList.add("hidden")
    reiniciar()
})
