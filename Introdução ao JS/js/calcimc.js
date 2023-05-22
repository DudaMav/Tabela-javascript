//Código responsável por calcular o IMC dos pacientes

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//varável que usa o DOM para selecionar todos as classes paciente

for (var i = 0; i < pacientes.length; i++) {
//laço de repetição para calcular o imc dos pacientes
    var paciente = pacientes[i];
    //guardou em uma varável a informação do tamanho da lista de pacientes 
    var peso = paciente.querySelector('.info-peso').textContent;
    //variável que vai buscar pelo conteúdo de texto do peso dos pacientes dentro da variável "paciente"
    var altura = paciente.querySelector('.info-altura').textContent;
    var imc_paciente = paciente.querySelector('.info-imc');

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    //validação dos pesos da tabela
    //O ! é o not. Ele retorna falso para um valor verdadeiro, e verdadeiro para um valor falso. Em outras palavras, ele "inverte" o valor lógico de uma expressão.
    if (!pesoValido) {
        pesoValido = false;
        imc_paciente.textContent = "Peso inválido";
        paciente.classList.add("paciente_invalido");
        //adicionando uma nova classe para mudar a cor do peso inválido
        //como o classList é um seletor de classes, não é necessário usar o seletor de classe
        //paciente.style.color = "" = método alternativo de mudar a cor usando o js
    }
    if (!alturaValida) {
        alturaValida = false;
        imc_paciente.textContent = "Altura inválida";
        paciente.classList.add("paciente_invalido");
    }
    if (pesoValido && alturaValida) {
        //calculo do imc do paciente (o & significa "e")
        var imc = calculaImc(peso, altura);
        //pegando a function que calcula o IMC passando o peso e altura
        imc_paciente.textContent = imc;
    }
}

function validaPeso (peso) {
    if(peso >= 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
    //retornando o imc p fora da função
}
