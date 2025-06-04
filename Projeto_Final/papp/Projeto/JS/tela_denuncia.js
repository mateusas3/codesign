document.addEventListener("DOMContentLoaded", function () {

    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let menuLateral = document.getElementById("menuLateral");
    let botaoVoltar = document.querySelector(".botaovoltar");
    const botaoConcluir = document.getElementById("vermelho");
    const inputSituacao = document.getElementById("situacao");
    const inputOrigem = document.getElementById("origem");
    const inputExtra = document.getElementById("Extra");


    if (botaoAbrir && botaoFechar && menuLateral) {
        botaoAbrir.addEventListener("click", function () {
            menuLateral.classList.add("aberto");
            menuLateral.classList.remove("hidden");
        });

        botaoFechar.addEventListener("click", function () {
            menuLateral.classList.remove("aberto");
            menuLateral.classList.add("hidden");
        });
    }

    // Botão voltar
    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", function () {
            window.history.back();
        });
    }

    if (botaoConcluir) {
    botaoConcluir.addEventListener("click", function () {
      if (
        inputSituacao.value.trim() === "" ||
        inputOrigem.value.trim() === ""
      ) {
        alert("Preencha os campos obrigatórios (descrição e origem)!");
      } else {
        // Salva no localStorage
        localStorage.setItem("situacao", inputSituacao.value.trim());
        localStorage.setItem("origem", inputOrigem.value.trim());
        localStorage.setItem("Extra", inputExtra.value.trim());

        // Redireciona para a página de conclusão
        window.location.href = "tela_conclusao.html";
      }
    });
  }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuLateral.classList.contains("aberto")) {
            menuLateral.classList.remove("aberto");
        }
    });
});
