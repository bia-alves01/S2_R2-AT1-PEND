let input = document.getElementById("item");
let btnListar = document.querySelector("#btnListar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("Lista")

//let complemento = input.value;

btnListar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.innerText = "Tarefa vazio!";
    }else{
        let itemNovo = document.createElement("li");
        itemNovo.innerText = input.value
        lista.appendChild(itemNovo)
        mensagem.innerText = `Criado com sucesso`
    
        input.value = "";
    }
    
    // mensagem.innerText = `${lista}`;   

})