let nomeCadastro = document.getElementById("nomeCadastro");
let btnCadastro = document.querySelector("#btnCadastro");
let mensagem = document.getElementById("mensagem");

btnCadastro.addEventListener("click", ()=> {

    let nome = nomeCadastro.value;

    if (!nome) {
        mensagem.innerText = "Erro ao cadastrar nome!";

    } else {
        mensagem.innerText = `Seja bem vindo ${nome}`;   
    }
})
