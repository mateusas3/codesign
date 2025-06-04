document.addEventListener("DOMContentLoaded", function () {

    // Declarando variáveis
    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let menuLateral = document.getElementById("menuLateral");
    let botaoIr = document.getElementById("botaoir");
    let input = document.querySelector('input');

    
    botaoAbrir.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    })

    botaoFechar.addEventListener("click", function () {
        menuLateral.classList.remove("aberto")
    })

    botaoIr.addEventListener("click", function () {

        if (document.querySelector('input').value == "") {
            alert("A caixa de pesquisa está vazia!")
        }
        else {
            localStorage.setItem("pesquisa", document.getElementById('pesquisa').value)
            window.location.href = "Resultado-Pesquisa.html"
        }
    })

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector("#botaoir").click();
        }
    })

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuLateral.classList.contains("aberto")) {
            menuLateral.classList.remove("aberto");
        }
    });

})