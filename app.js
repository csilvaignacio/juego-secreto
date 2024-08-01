let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let titulo = document.querySelector('h1').innerHTML = "Juego del número secreto!";
let parrafo = document.querySelector('p').innerHTML = "Indica numero del 1 al 10";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto!");
    asignarTextoElemento('p', "Indica numero del 1 al 10");
    numeroSecreto = generarNumeroAleatorio();
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute("disabled");
    }else{
        // si no se acierta 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor al ingresado")
        }else{
            asignarTextoElemento('p',"El número secreto es mayor al ingresado")
        }
       intentos++
       limpiarCaja(); // setear campo al dar click si no acierta
    }
    return;
}

function limpiarCaja(){
    let limpiar = document.querySelector('#valorUsuario');
    return limpiar.value = "";
}


function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * 10)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
    
    //si el numero generado ya esta incluido en la lista
   
    
}


function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
}

condicionesIniciales();






