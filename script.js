const btn_inicar = document.querySelector(".button-start")
const btn_parar = document.querySelector(".button-stop")
const btn_reiniciar = document.querySelector(".button-reload")
const textoTempo = document.querySelector('p')
let cron
let tempo = 0


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
    tempo = 0
    textoTempo.innerText = '00:00'
    
}

function contar(){
    let tempoFormatado
    tempo++
    mostrarTempo()

}

function intercalarBotoes(opcao){
    if(opcao === 1){
       
        
    
       
    }else if(opcao === 2)
    {
        btn_inicar.classList.toggle("hidden")
        btn_parar.classList.toggle("hidden")
    }else if(opcao === 3){
        btn_inicar.classList.toggle("hidden")
    }
    
}

function mostrarTempo()
{
    const tempoFormatado = new Date(tempo);
    const minutos = tempoFormatado.getMinutes()
    const segundos = tempoFormatado.getSeconds()
    const milisegundos = tempoFormatado.getMilliseconds()
    
    
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos
    const milisegundosFormatados = milisegundos <10 ? '0' + milisegundos : milisegundos

    const tempoString = minutos > 0 ?`${minutosFormatados}:${segundosFormatados}:${milisegundosFormatados}` :` ${segundosFormatados}:${milisegundosFormatados}`
    textoTempo.innerText = tempoString
}

btn_inicar.addEventListener('click', () =>{
     btn_inicar.classList.toggle("hidden")
     btn_parar.classList.remove("hidden") 
     btn_reiniciar.classList.remove("hidden")
    iniciar()
    
})

btn_parar.addEventListener('click', () =>{
    btn_inicar.classList.toggle("hidden")
    parar()
})

btn_reiniciar.addEventListener('click', () =>{
    btn_inicar.classList.remove("hidden")
    btn_parar.classList.add("hidden") 
    btn_reiniciar.classList.add("hidden")
    reiniciar()
    
})
