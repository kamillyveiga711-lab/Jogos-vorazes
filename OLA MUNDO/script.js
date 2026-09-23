function mudarTitulo() {
    document.getElementById("titulo1").textContent = "Olá, Distritos!";
}

function mudarFundo() {
    document.body.style.backgroundColor = "yellow";
}

function mudarCorTexto() {
    document.getElementById("textoCor").style.color = "orange";
}

function alternarTexto() {
    const p = document.getElementById("textoEsconder");
    p.style.display = p.style.display === "none" ? "block" : "none";
}

let num = 0;
function contar() {
    num++;
    document.getElementById("contador").textContent = num;
}

function mostrarNome() {
    const nome = document.getElementById("campoNome").value;
    document.getElementById("resultadoNome").textContent = nome;
}

function trocarImagem() {
    document.getElementById("minhaImagem").src = "images.jpg";
}

let tamanho = 16;
function aumentarTexto() {
    tamanho += 2;
    document.getElementById("textoAumentar").style.fontSize = tamanho + "px";
}

let itemNum = 1;
function adicionarItem() {
    const lista = document.getElementById("minhaLista");
    lista.innerHTML += `<li>Item ${itemNum}</li>`;
    itemNum++;
}

let tamanhoTituloPainel = 24;

function pMudarTitulo() {
    document.getElementById("painelTitulo").textContent = "Noticias!";
}

function pMudarFundo() {
    document.body.style.backgroundColor = "lightyellow";
}

function pMudarTexto() {
    document.getElementById("painelTexto").style.color = "green";
}

function pAumentarTitulo() {
    tamanhoTituloPainel += 4;
    document.getElementById("painelTitulo").style.fontSize = tamanhoTituloPainel + "px";
}

function pEsconderTexto() {
    document.getElementById("painelTexto").style.display = "none";
}

function pMostrarTexto() {
    document.getElementById("painelTexto").style.display = "block";
}