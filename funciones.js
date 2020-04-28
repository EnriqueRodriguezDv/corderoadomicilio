const lengua = document.getElementById("lengua");
const lenguaS = document.getElementById("lenguaS");
const cofrade = document.getElementById("cofrade");
const brazo3 = document.getElementById("brazo3");
const total = document.getElementById("total");
var totalF = 0;

function funcion(){
    totalF = lengua.value * 5.50 + lenguaS.value * 5.75 + cofrade.value * 9.95 + brazo3.value * 8.95;
    totalF = parseFloat(totalF).toFixed(2);
    total.innerHTML = totalF;
}