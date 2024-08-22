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

    if (media >= 8.5) {
        document.getElementById('resultado').innerText = `a sua média é ${media} ,Sua menção é A`;
    }

    else if (media >= 7.5 && media < 8.5) {
        document.getElementById('resultado').innerText = `a sua media é ${media} , Sua menção é B`;
    }

    else if (media >= 6 && media < 7.5) {
        document.getElementById('resultado').innerText = `a sua media é ${media} , Sua menção é C`;
    }

    else if (media >= 5 && media < 6) {
        document.getElementById('resultado').innerText = `a sua media é ${media} , Sua menção é D`;
    }

    else {
        document.getElementById('resultado').innerText = `a sua media é ${media} , Sua menção é E`;
    }


}//fecha a função