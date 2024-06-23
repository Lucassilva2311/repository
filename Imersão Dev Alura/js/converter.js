
let btn = document.querySelector('#calcula');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let real = document.querySelector('#real');
    let valor = real.value;
    let dolar = real.value * 5.43;
    let euro = real.value * 5.81;
    let pesoMX = real.value * 0.3;
    let pesoAR = real.value * 0.006;
    

    console.log('$' + valor + " em dólares é $" + dolar.toFixed(2));
    element = document.querySelector('.mostrar-numero').innerHTML = '<p> R$' + valor + ' em dólares é $' + dolar.toFixed(2) + '</p>';
        if(real.value==null || real.value==0){
            document.querySelector('.mostrar-numero').innerHTML = '<p> R$' + valor + ' em dólares é $0,00</p>';
        }
});

$("moedas").change(function() {
	var val=$(this).val();
	console.log(val);
});