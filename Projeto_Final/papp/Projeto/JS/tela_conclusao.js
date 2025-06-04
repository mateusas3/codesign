
document.addEventListener("DOMContentLoaded", function () {
  const menuLateral = document.getElementById("menuLateral");
  const botaoAbrir = document.querySelector(".abrir-menu");
  const botaoFechar = document.querySelector(".fechar-menu");
  const botaoVoltar = document.getElementById("botaovoltar");
  let situacao = document.querySelector('.situacao1');
  let origem = document.querySelector('.origem1');
  let Extra = document.querySelector('.Extra1');

  situacao.innerHTML = "Situação: " + (localStorage.getItem('situacao') || "(não informado)");
  origem.innerHTML = "Origem: " + (localStorage.getItem('origem') || "(não informado)");
  Extra.innerHTML = "Informações extras: " + (localStorage.getItem('Extra') || "(não informado)");

  if (botaoAbrir && botaoFechar && menuLateral) {
    botaoAbrir.addEventListener("click", function () {
      menuLateral.classList.add("aberto");
    });
    botaoFechar.addEventListener("click", function () {
      menuLateral.classList.remove("aberto");
    });
  }

  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuLateral.classList.contains("aberto")) {
      menuLateral.classList.remove("aberto");
    }
  });
});
