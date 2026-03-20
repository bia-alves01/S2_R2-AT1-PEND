let input = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("listaTarefas")

//let complemento = input.value;

btnAdicionar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.innerText = "Tarefa vazio!";
    } else {
        //Criar um item 
        let itemNovo = document.createElement("li");
        itemNovo.className = "list-group-item   "
        itemNovo.innerText = input.value
        listaTarefas.appendChild(itemNovo)
        mensagem.innerText = `Criado com sucesso`

        input.value = "";

        //Criar botão de remover
        let btnRemover = document.createElement("button")
        btnRemover.innerText = 'Remover';
        btnRemover.className = "btn btn-outline-danger m-3"
        itemNovo.appendChild(btnRemover);

        //Criar função do botão remover
        btnRemover.addEventListener("click", ()=> {
            itemNovo.remove();
        })

        itemNovo.appendChild(itemNovo);

        //Criar um check
        let check = dcument.createElement("checkbox")
        check.className = "form-check"
        itemNovo.appendChild(check);


    }
    


})