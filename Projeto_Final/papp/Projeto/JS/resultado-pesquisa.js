document.addEventListener("DOMContentLoaded", function () {

    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let botaoVoltar = document.querySelector(".botaovoltar");
    let menuLateral = document.getElementById("menuLateral");
    let pesqres = document.querySelector(".pesqres");
    let imagem_pesquisa = document.querySelector(".imagem_pesquisa");


    pesqres.innerHTML = localStorage.getItem('pesquisa');
    imagem_pesquisa.innerHTML = localStorage.getItem('imagem');


    function textoParaNumero(texto) {
        let num = 0;
        for (let i = 0; i < texto.length; i++) {
            num += texto.charCodeAt(i);
        }
        return num;
    }


    function numeroAleatorioComSemente(semente) {
        let x = Math.sin(semente) * 10000;
        return x - Math.floor(x);
    }


    function gerarValores(n, texto) {
        let semente = textoParaNumero(texto);
        let valores = [];
        let soma = 0;

        for (let i = 0; i < n; i++) {
            valores[i] = numeroAleatorioComSemente(semente + i);
            soma += valores[i];
        }

        for (let i = 0; i < n; i++) {
            valores[i] = (valores[i] / soma) * 100;
        }

    
        valores[0] = Math.round(valores[0]);
        valores[1] = Math.round(valores[1]);
        valores[2] = 100 - valores[0] - valores[1];

        return valores;
    }


    function atualizarPorcentagens() {
        let pesquisa = localStorage.getItem('pesquisa') || "";
        let valores = gerarValores(3, pesquisa);

        document.getElementById('verdadeiro').textContent = valores[0].toFixed(0) + '%';
        document.getElementById('falso').textContent = valores[1].toFixed(0) + '%';
        document.getElementById('inc').textContent = valores[2].toFixed(0) + '%';
    }


    atualizarPorcentagens();


    botaoAbrir.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    });
    botaoFechar.addEventListener("click", function () {
        menuLateral.classList.remove("aberto");
    });
    botaoVoltar.addEventListener("click", function () {
        window.history.back();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuLateral.classList.contains("aberto")) {
            menuLateral.classList.remove("aberto");
        }
    });
});
