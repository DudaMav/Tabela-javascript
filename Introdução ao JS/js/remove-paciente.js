//Código responsável por remover os pacientes da tabela, caso haja algum erro

var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    //parentNode retorna o nó (node) parente de um Node referenciado na árvore DOM.
    //o target pegará o alvo do evento

    //O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. 
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
});