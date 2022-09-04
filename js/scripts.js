// import * as html2canvas from "./html2canvas"; 

var frase = document.getElementById("frase").innerText;

var x = frase.split("\n");

document.getElementById("frase").innerHTML = x[0];
document.getElementById("autor").innerHTML = x[1];

document.addEventListener("DOMContentLoaded", function() {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = "*" + x[0] + "* " + x[1];
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);


function takeshot(){
    html2canvas(document.querySelector(".card")).then(canvas => {
        document.getElementById("output").appendChild(canvas)
    });
}