/* OBJ 1: qnd cliar no botaõ marcalo como selecionado e mostrar seu conteúdo */

/* pegar botoes*/
const botoes = document.querySelectorAll('.botao');

/* quando clicar no botao mostrar suas informações */
//pegando as divs com as informações
const personagens = document.querySelectorAll(".personagem");

/* colocar classe selecionado quando o cliente clicar */
botoes.forEach((botao, indice)=> { /*pegando um de cada vez para n dar erro*/
    botao.addEventListener("click", () => {

    /*ver se já tem algum selecionado e remove-lo*/
        desselecionar_botao();

    /*colocar a classe selecionado*/
        botao.classList.add("selecionado");


    //verificar se já existe uma div selecionado e remove-lo
        desselecionar_div();
    //colocando a classe selecionado as divs usando o indice
        personagens[indice].classList.add("selecionado");
    });
});


function desselecionar_div() {
    const divSelecionado = document.querySelector(".personagem.selecionado");
    divSelecionado.classList.remove("selecionado");
}

function desselecionar_botao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

