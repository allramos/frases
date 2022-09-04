// import * as html2canvas from "./html2canvas"; 

var frase = document.getElementById("frase").innerText;

var x = frase.split("\n");

document.getElementById("frase").innerHTML = x[0];
document.getElementById("autor").innerHTML = x[1];


function takeshot(){
    html2canvas(document.querySelector(".card")).then(canvas => {
        document.getElementById("output").appendChild(canvas)
    });
}