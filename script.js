let input = document.getElementById("item");
let btnListar = document.querySelector("#btnListar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("Lista")

//let complemento = input.value;

btnListar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.innerText = "Tarefa vazio!";
    } else {
        //Criar um item 
        let itemNovo = document.createElement("li");
        itemNovo.innerText = input.value
        lista.appendChild(itemNovo)
        mensagem.innerText = `Criado com sucesso`

        input.value = "";

        //Criar botão de remover
        let btnRemover = document.createElement("button")
        btnRemover.innerText = 'Remover';
        btnRemover.className = "btn btn-outline-danger m-3"
        itemNovo.appendChild(btnRemover);

        btnRemover.addEventListener("click", ()=> {
            itemNovo.remove();
        })

        itemNovo.appendChild(itemNovo);
    }
    


})