function calcular() {
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value

var num1 = parseFloat(num1)
var num2 = parseFloat(num2)

if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
    document.getElementById('resultado').innerText = 'Insira uma nota válida';
    return; 
}

var media = (num1 + num2) / 2

if (media >= 6){
    document.getElementById('resultado').innerText = `a sua média é ${media} Aprovado, Parabéns! Sorta us fuguete`;
}

else {
document.getElementById('resultado').innerText = `a sua media é ${media} Reprovado  ;(`;
}


}