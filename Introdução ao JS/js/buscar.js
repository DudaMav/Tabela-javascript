//buscando novos pacientes e AJAX

var botaoAdd = document.querySelector("#buscar-paciente");

botaoAdd.addEventListener("click", function() {
    var xhr = new XMLHttpRequest()
    //XMLHttpRequest é um objeto responsável por fazer requisições http

    //função que abre a conexão com o endereço
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    //quando "carregar" realiza a função
    xhr.addEventListener("load", function(){
        if(xhr.status == 200) {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        //usando um "transformador" de JSON para um objeto javascript
        //passando um texto em json e devolvendo em js
        //string para um array

        pacientes.forEach(function(paciente){
            addPacienteTabela(paciente);
            }) 
        } else {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    })
    xhr.send();
    //enviando a requisição
})