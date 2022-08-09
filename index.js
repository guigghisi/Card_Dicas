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
