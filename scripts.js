function exibir() {
    //Obtendo valores dos campos de entrada
    var nome = document.getElementById("nome").value;

    //Criando a mensagem
    var mensagem;

    if (nome == "") {
        mensagem = "Bem vindo: anonimo";
    } else {
        mensagem = "Bem vindo: " + nome;
    }

    //Exibe a mensagem em uma caixa de diálogo
    alert(mensagem);
}

var botao = document.getElementById("botaoMostrar");

//Registrando um evento para o botão
botao.addEventListener("click", exibir);