var campoFiltro = document.querySelector("#filtrar-tabela");

//o evento de input ocorre quando algo for escrito no input
campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");

    //se o valor do campo de texto digitado for maior que zero (a pessoa digitar) executará uma ação
    //o this referencia quem é o dono da função = compoFiltro
    if(this.value.length > 0) {
    for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            //criando uma expressão regular
    
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
