//Código responsável por criar um novo paciente na tabela

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    //o addEventListener estará ouvindo um evento no botão, que no caso é o click e executando uma função anônima
    event.preventDefault();
    //função que previne os comportamentos padrões do browser, que no caso é recarregar a página quando o botão for clicado
    
    var form = document.querySelector("#form-adiciona");
    var paciente = pacienteForm(form);
    //var do paciente que está armazenando as informações do pacienteForm, passando como parâmetro o form

    var erros = validaPaciente(paciente);
    //string de erros 

    if (erros.length > 0){
        mensagemErro(erros);
        return;
    }

    addPacienteTabela (paciente);

    form.reset();
    //função para limpar os campos do formulário
    var mensagensErro = document.querySelector("#mensagem-erro");
   mensagensErro.innerHTML = ""
});


function addPacienteTabela (paciente) {
    var pacientetr = montaTr(paciente);
    //criando a tr que será colocada na tabela

    //inserindo o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr);
}

//pegando as informações do paciente 
function pacienteForm(form) {
    //criando um objeto, para passar as propriedades do objeto
    // os ":" passam o valor para o objeto
    var pacienteInfo = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return pacienteInfo;
}

function montaTr(paciente) {
    var pacientetr = document.createElement("tr");
    pacientetr.classList.add("paciente");
 
    //o appendChild adiciona um elemento filho em um elemento pai
    //adicionando os tds com a função de montar os tds
    pacientetr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacientetr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacientetr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacientetr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacientetr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacientetr
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {
    var erros = [];
    //array de erros para passar mais de uma string
    if(paciente.nome.length == 0) {
        erros.push("Insira o nome do paciente!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
        //o .push está colocando uma mensagem de erro no array de erros
    } 

    if(paciente.peso.length == 0){
        erros.push("Insira o peso do paciente!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if(paciente.altura.length == 0){
        erros.push("Insira a altura do paciente!");
    }

    if(paciente.gordura.length == 0){
        erros.push("Insira a gordura do paciente!");
    }
  
    return erros;
}

function mensagemErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""

    erros.forEach(function(erro){
        //o forEach significa "para cada", então para cada erro ele executará uma função
        var li = document.createElement("li");
        //criando uma lista que receberá os erros
        li.textContent = erro;
        ul.appendChild(li);
    })
}