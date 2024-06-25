
let btn = document.querySelector('#calcula');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let real = document.querySelector('#real');
    let valor = real.value;
    let dolar = real.value * 5.43;
    let euro = real.value * 5.81;
    let pesoMX = real.value * 0.3;
    let pesoAR = real.value * 0.006;

    element = document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#235906> R$' + valor + ' em dólares é $' + dolar.toFixed(2) + '</p>';
    if (real.value == 0 || real.value == null) {
        document.querySelector('.mostrar-numero').innerHTML = '<p> R$0.00 em dólares é $0.00</p>';
    } else if (real.value < 0) {
        document.querySelector('.mostrar-numero').innerHTML = '<p style=color:#82113E> -R$' + valor * -1 + ' em dólares é -$' + dolar.toFixed(2) * -1 + '</p>'
    }
});
/*
function trocarMoeda(value) {
    if (value == "dolar"){
        alert("Você escolheu o Dolar")
    } else if (value == "euro"){
        alert("Você escolheu o Euro")
    } else if (value == "pesoMX"){
        alert("Você escolheu o Peso Mexicano")
    } else if (value == "pesoAR"){
        alert("Você escolheu o Peso Argentino")
    }
};*/