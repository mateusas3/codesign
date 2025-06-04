document.addEventListener("DOMContentLoaded", function () {

    // Declarando variáveis
    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let menuLateral = document.getElementById("menuLateral");
    let botaoVoltar = document.querySelector(".botaovoltar");
    let botaoIr = document.getElementById("botaoir");

    // Aqui entram as funções que devem ser executadas no instante em que a página é carregada


    // Definindo os eventos que os botões fazem acontecer
    botaoAbrir.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    });
    botaoFechar.addEventListener("click", function () {
        menuLateral.classList.remove("aberto");
    });
    botaoVoltar.addEventListener("click", function () {
        window.history.back();
    })
    botaoIr.addEventListener("click", function () {

        if (document.querySelector('input').value == "") {
            alert("Nenhum documento anexado!")
        }
        else {
            localStorage.setItem("imagem", document.getElementById('img_peq'))
            window.location.href = "Resultado-Pesquisa.html"
        }
    })
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuLateral.classList.contains("aberto")) {
            menuLateral.classList.remove("aberto");
        }
    });

});