const pontos = document.querySelector("#pontos");
const textoMais = document.querySelector("#mais");
const textoLeiaMais = document.querySelector("#textoLeiaMais");

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

const criarTopicos = document.querySelector("#criarTopico");
const btnCriarTopico = document.querySelector("#btnCriarTopico");
const topicoComentario = document.querySelector("#topicoComentario");

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

const bntEnviarComentario = document.querySelector("#bntEnviarComentario");
const topicoCriado = document.querySelector("#topicoCriado");

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

botaoCriarNovoComentario.addEventListener('click', novoComentario)
