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
  colocarCardDiv();
  contagemDeCategoria();
}
colocarCardDiv();
function colocarCardDiv() {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  let cardDiv = document.querySelector("#cardDicas");
  cardDiv.innerHTML = "";
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
    <button type="button" id="btnEditar" onclick="editarCard(${cards.indexOf(
      card
    )})"><img id="iconeEditar" src="assets/editar.png" height="30px" alt="iconeEditar"></button>
  </div>
  <div id="divBtnExcluir" onclick="deletarCard(${cards.indexOf(card)})">
    <button type="button" id="btnExcluir"><img id="iconeLixeira" src="assets/lixeira.png" height="30px" alt="iconeLixeira"></button>
  </div>
    `;
    cardDiv.appendChild(cardAuxiliar);
  });
}
function deletarCard(id) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];

  cards.splice(id, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  alert("Card deletado com sucesso!");
  location.reload();
}

function editarCard(id) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  let card = cards[id];
  document.querySelector("#titulo").value = card.titulo;
  document.querySelector("#linguagem").value = card.linguagem;
  document.querySelector("#categoria").value = card.categoria;
  document.querySelector("#descricao").value = card.descricao;
  document.querySelector("#video").value = card.link;
  document.querySelector("#btnSalvar").onclick = function () {
    cards[id].titulo = document.querySelector("#titulo").value;
    cards[id].linguagem = document.querySelector("#linguagem").value;
    cards[id].categoria = document.querySelector("#categoria").value;
    cards[id].descricao = document.querySelector("#descricao").value;
    cards[id].link = document.querySelector("#video").value;
    localStorage.setItem("cards", JSON.stringify(cards));
    alert("Card editado com sucesso!");
    location.reload();
  };
  contagemDeCategoria();
}

function pesquisaCard(textoPesquisa) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  let cardDiv = document.querySelector("#cardDicas");
  cardDiv.innerHTML = "";
  cards.forEach((card) => {
    if (
      card.titulo.includes(textoPesquisa) ||
      card.categoria.includes(textoPesquisa)
    ) {
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
      <button type="button" id="btnEditar" onclick="editarCard(${cards.indexOf(
        card
      )})"><img id="iconeEditar" src="assets/editar.png" height="30px" alt="iconeEditar"></button>
    </div>
    <div id="divBtnExcluir" onclick="deletarCard(${cards.indexOf(card)})">
      <button type="button" id="btnExcluir"><img id="iconeLixeira" src="assets/lixeira.png" height="30px" alt="iconeLixeira"></button>
    </div>
      `;
      cardDiv.appendChild(cardAuxiliar);
    }
  });
}

function contagemDeCategoria() {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  let total = 0;
  let frontEnd = 0;
  let backEnd = 0;
  let fullstack = 0;
  let comportamental = 0;

  cards.forEach((card) => {
    total++;
    if (card.categoria == "frontend") {
      frontEnd++;
    } else if (card.categoria == "backend") {
      backEnd++;
    } else if (card.categoria == "fullstack") {
      fullstack++;
    } else if (card.categoria == "comportamental/soft") {
      comportamental++;
    }
  });
  document.querySelector("#total").innerHTML = total;
  document.querySelector("#frontEnd").innerHTML = frontEnd;
  document.querySelector("#backEnd").innerHTML = backEnd;
  document.querySelector("#fullStack").innerHTML = fullstack;
  document.querySelector("#softSkill").innerHTML = comportamental;
}
contagemDeCategoria();
