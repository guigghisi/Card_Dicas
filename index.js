class Card {
  constructor(titulo, linguagem, categoria, descricao, link) {
    this.titulo = titulo;
    this.linguagem = linguagem;
    this.categoria = categoria;
    this.descricao = descricao;
    this.link = link;
  }
}

function salvar() {
  event.preventDefault();
  console.log("Salvar");

  var titulo = document.querySelector("#titulo").value;
  var linguagem = document.querySelector("#linguagem").value;
  var categoria = document.querySelector("#categoria").value;
  var descricao = document.querySelector("#descricao").value;
  var link = document.querySelector("#video").value;
  var card = new Card(titulo, linguagem, categoria, descricao, link);
  var cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(card);
  localStorage.setItem("cards", JSON.stringify(cards));
  alert("Card salvo com sucesso!");
}

function removerCard() {
  event.preventDefault();
  console.log("Remover");
  var cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.pop();
  localStorage.setItem("cards", JSON.stringify(cards));
  alert("Card removido com sucesso!");
}

function colocarCardDiv() {
  var cards = JSON.parse(localStorage.getItem("cards")) || [];
  var cardDiv = document.querySelector("#cardDicas");
  cards.forEach((card) => {
    console.log(card);
    var cardAuxiliar = document.createElement("div");
    cardAuxiliar.id = "modeloCard";
    cardAuxiliar.innerHTML = `
    <div id="tituloCard">
    <p>${card.titulo}</p>
  </div>
  <div id="linguagemCard">
    <p><strong>Linguagem/Skill:    ${card.linguagem}</strong></p>
  </div>
  <div id="categoriaCard">
    <p>Categoria:     ${card.categoria}</p>
  </div>
  <div id="descricaoCard">
    <p>${card.descricao}</p>
  </div>
  <div id="divBtnVideo">
    <button type="button" id="btnVideo"><img id="iconeVideo" src="assets/video.png" height="30px" alt="iconeVideo"></button>
  </div>
  <div id="divBtnEditar">
    <button type="button" id="btnEditar"><img id="iconeEditar" src="assets/editar.png" height="30px" alt="iconeEditar"></button>
  </div>
  <div id="divBtnExcluir">
    <button type="button" id="btnExcluir"><img id="iconeLixeira" src="assets/lixeira.png" height="30px" alt="iconeLixeira"></button>
  </div>
    `;
    cardDiv.appendChild(cardAuxiliar);
  });
}
colocarCardDiv();
