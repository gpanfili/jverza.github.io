var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijeras = document.getElementById("Tijeras");
var btn_iniciar = document.getElementById("Iniciar_juego");
var img_usuario = document.getElementById("usuario");
var img_cpu = document.getElementById("cpu");
var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;

var Menu = "espera";
var Opcion_jugador;
var Opcion_cpu;


init_imagenes();





var intervalID = window.setInterval(LecturaJson, 500);

function LecturaJson() {
 
fetch('https://jverza.github.io/datos.json')
.then((response) => response.json())
.then(res =>   document.getElementById("datos_maquina").innerText = res[0].maquina + " cantidad de tudos " + res[0].contasor )

}











btn_piedra.onclick = function() {
    Opcion_jugador = 0;
    img_usuario.src = "./img/Piedra.png";

    Opcion_cpu = num_aleatorio()
    display_opcion_cpu(Opcion_cpu);
    game(Opcion_jugador, Opcion_cpu);

}
btn_papel.onclick = function() {
    Opcion_jugador = 1;
    img_usuario.src = "./img/Papel.png";

    Opcion_cpu = num_aleatorio()
    display_opcion_cpu(Opcion_cpu);
    game(Opcion_jugador, Opcion_cpu);


}
btn_tijeras.onclick = function() {
    Opcion_jugador = 2;
    img_usuario.src = "./img/Tijeras.png";


    Opcion_cpu = num_aleatorio()
    display_opcion_cpu(Opcion_cpu);
    game(Opcion_jugador, Opcion_cpu);



}




function init_imagenes() {
    btn_piedra.style.backgroundImage = " url('./img/Piedra.png')";
    btn_papel.style.backgroundImage = " url('./img/Papel.png')";
    btn_tijeras.style.backgroundImage = "url('./img/Tijeras.png')";
}

function num_aleatorio() {
    return parseInt(Math.random() * 3);
}

function game(opcion_jugador, opcion_cpu) {
    var escenario_1;
    var escenario_2;
    var escenario_3;
    var empate;
    if (opcion_jugador === opcion_cpu) {
        empate = true;
    } else if (opcion_jugador === 0 && opcion_cpu === 2) {
        escenario_1 = true;
    } else if (opcion_jugador === 1 && opcion_cpu === 0) {
        escenario_2 = true;
    } else if (opcion_jugador === 2 && opcion_cpu === 1) {
        escenario_3 = true;
    }


    if (escenario_1 || escenario_2 || escenario_3) {
      //  alert("usuario gana");
        marcador_usuario++;
        document.getElementById("puntos_usuario").innerText = marcador_usuario;
        document.getElementById("resultado_juego").innerText = "GANASTE";


    } else if (empate) {
     //   alert("EMPATE");
     document.getElementById("resultado_juego").innerText = "EMPATE";
    } else {
    //    alert("CPU gana");
        marcador_cpu++;
        document.getElementById("puntos_cpu").innerText = marcador_cpu;
        document.getElementById("resultado_juego").innerText = "GANE YO";

    }
}

function display_opcion_cpu(opcion) {
    if (opcion === 0) {
        img_cpu.src = "./img/Piedra.png";
    } else if (opcion === 1) {
        img_cpu.src = "./img/Papel.png";
    } else {
        img_cpu.src = "./img/Tijeras.png";
    }
}