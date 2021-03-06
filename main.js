$(document).ready(function() {
    var pagina = document.location.href
    var array_selecionado = JSON.parse(localStorage.getItem(pagina));
    if (array_selecionado == null) {
        array_selecionado = []
    }
    $(".correta").click(function() {
        if (array_selecionado.length == 0) {
            $(".correta")
                .removeClass("alert-primary");
            $(this)
                .addClass("alert-success");

            registro_selecionado = { id: "#" + $(this)[0].id, classe: "alert-success" }
            array_selecionado.push(registro_selecionado)
            localStorage.setItem(pagina, JSON.stringify(array_selecionado));
            contarPontos();
        }
    });

    $(".incorreta").click(function() {
        if (array_selecionado.length == 0) {
            $(".incorreta")
                .removeClass("alert-primary");
            $(this)
                .addClass("alert-danger");

            registro_selecionado = { id: "#" + $(this)[0].id, classe: "alert-danger" }
            array_selecionado.push(registro_selecionado)
            localStorage.setItem(pagina, JSON.stringify(array_selecionado));
        }
    });
    if (array_selecionado) {
        $(array_selecionado).each(function(x, obj) {
            $(obj.id)
                .addClass(obj.classe);
        });
    }
});

function contarPontos() {
    if (!localStorage.pontos) {
        localStorage.pontos = 0;
    }
    localStorage.pontos = parseInt(localStorage.getItem("pontos")) + 10;
    document.getElementById("contarPontos").innerHTML = localStorage.pontos;
}

function jogarNovamente() {
    localStorage.clear();
    window.location.href = "quiz.html";
}