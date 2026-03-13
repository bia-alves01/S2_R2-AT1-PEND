let input = document.getElementById("item");
let btnListar = document.querySelector("#btnListar");
//let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("Lista")

let complemento = input.value;

btnListar.addEventListener("click", () => {

    if (!input.value) {
        mensagem.className = "text-danger";
        mensagem.innerText = "Digite um item!";
    }
    
    const li = document.createElement("li");
    li.innerText = input.value;
    lista.appendChild(li)

    input.value = "";
    // mensagem.innerText = `${lista}`;   

})
