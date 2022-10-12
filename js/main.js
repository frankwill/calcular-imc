var botao = document.querySelector("#calcular-imc");

var pesoValido = true;
var alturaValida = true;




botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-calculadora");
    
    var peso = form.peso.value;
    var altura = form.altura.value;

    if(peso <= 0 || peso >=1000) {
        pesoValido = false;
        console.log("Peso inválido")
    }

    if(altura <= 0 || altura >=3) {
        alturaValida = false;
        console.log("Altura inválida")
    }

    var imc = peso / (altura * altura);
    console.log(imc.toFixed(2))


})
