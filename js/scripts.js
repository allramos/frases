// import * as html2canvas from "./html2canvas"; 

var frase = document.getElementById("frase").innerText;

var x = frase.split("\n");

document.getElementById("frase").innerHTML = x[0];
document.getElementById("autor").innerHTML = x[1];


var base = "f";


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const r = randomIntFromInterval(1, 9)
const g = randomIntFromInterval(1, 9)
const b = randomIntFromInterval(1, 9)
var cor = "#"+base+r+base+g+base+b;

console.log(cor);
document.getElementById("cartao").style.backgroundColor = cor;

function novaFrase() {
    location.reload();
 }

function takeshot() {
    html2canvas(document.querySelector(".card")).then(canvas => {
        document.getElementById("output").appendChild(canvas)
    });
}


function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

const btn = document.querySelector("#btnprint");

btn.addEventListener("click", function () {
    toggleFullScreen();
});

document.addEventListener("DOMContentLoaded", function () {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = "*" + x[0] + "* " + x[1];
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);