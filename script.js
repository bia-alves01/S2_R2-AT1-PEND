let input = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("listaTarefas")

//let complemento = input.value;

btnAdicionar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.innerText = "Tarefa vazio!";
    }else{
        let itemNovo = document.createElement("li");
        itemNovo.className = "m-3"
        itemNovo.innerText = input.value
        listaTarefas.appendChild(itemNovo)
        mensagem.innerText = `Criado com sucesso`
    
        input.value = "";
    }

})