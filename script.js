let input = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("listaTarefas")

//let complemento = input.value;

btnAdicionar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.innerText = "Tarefa vazia!";
    } else {
        //Criar um item 
        let itemNovo = document.createElement("li");
        itemNovo.className = "list-group-item d-flex justify-content-between align-items-center"
        
        let divLabel = document.createElement("div");
        divLabel.className = "d-flex justify-content-between align-items-center";

        //<Div> do checkout
        let divInput = document.createElement("div");
        divInput.className = "form-check d-flex align-items-center";
        
        //Criar um check
        let check = document.createElement("input")
        check.className = "form-check-input"
        check.setAttribute("type",'checkbox');
        divInput.appendChild(check); 
        divLabel.appendChild(divInput);
        
        // Texto do Item
        let p = document.createElement("p");
        p.innerText = input.value;
        p.className = "mb-0";
        divLabel.appendChild(p);

        input.value = "";
        
        //Criar botão de remover
        let btnRemover = document.createElement("button")
        btnRemover.innerText = 'Remover';
        btnRemover.className = "btn btn-outline-danger m-3"
        
        
        //Criar função do botão remover
        btnRemover.addEventListener("click", ()=> {
            itemNovo.remove();
            btnRemover.remove();
        })
        
        itemNovo.appendChild(divLabel);
        itemNovo.appendChild(btnRemover);
        lista.appendChild(itemNovo);
        
        mensagem.innerText = `Criado com sucesso`
    }
    
    
    
})