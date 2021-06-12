const pontos = document.querySelector("#pontos");
const textoMais = document.querySelector("#mais");
const textoLeiaMais = document.querySelector("#textoLeiaMais");
const criarTopicos = document.querySelector("#criarTopico");
const btnCriarTopico = document.querySelector("#btnCriarTopico");
const topicoComentario = document.querySelector("#topicoComentario");
const bntEnviarComentario = document.querySelector("#bntEnviarComentario");
const topicoCriado = document.querySelector("#topicoCriado");
const respostasComentarios = document.querySelector("#respostasComentarios");

function lerMais() {
  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    textoMais.style.display = "none";
    textoLeiaMais.style.display = "inline";
  } else {
    pontos.style.display = "none";
    textoMais.style.display = "inline";
    textoLeiaMais.style.display = "none";
  }
}

function topicoCriar() {
  if (criarTopicos.style.display === "none") {
    criarTopicos.style.display = "grid";
    topicoComentario.style.display = "none";
  } else {
    criarTopicos.style.display = "none";
    topicoComentario.style.display = "grid";
  }
}

btnCriarTopico.addEventListener("click", topicoCriar);

function enviarComentario() {
  if ((topicoComentario.style.display = "none")) {
    topicoCriado.style.display = "grid";
    topicoComentario.style.display = "none";
  } else {
    topicoCriado.style.display = "none";
    topicoComentario.style.display = "grid";
  }
}

bntEnviarComentario.addEventListener("click", enviarComentario);

function novoComentario() {
  if ((topicoComentario.style.display = "none")) {
    topicoCriado.style.display = "none";
    topicoComentario.style.display = "grid";
  } else {
    topicoCriado.style.display = "grid";
    topicoComentario.style.display = "none";
  }
}

botaoCriarNovoComentario.addEventListener("click", novoComentario);

function verComentario() {
  if (respostasComentarios.style.display === "flex") {
    respostasComentarios.style.display = "none";
  } else {
    respostasComentarios.style.display = "flex";
  }
}

const btnHamburguer = document.querySelector("#btn-hamburguer");
const menu = document.querySelector("#sideMenu")

console.log(btnHamburguer)

console.log(menu)

function abrirMenu() {
  console.log(menu.classList.toggle('ativo'))
}

btnHamburguer.addEventListener("click", abrirMenu)
