$(document).ready(function() {
    $(".click").click(function() {
        $(".click")
            .removeClass("alert-primary"); // remove a classe de todos
        $(this)
            .addClass("alert-success"); // adiciona a classe ao botão clicado
    });
});

$(document).ready(function() {
    $(".click2").click(function() {
        $(".click2")
            .removeClass("alert-primary"); // remove a classe de todos
        $(this)
            .addClass("alert-danger"); // adiciona a classe ao botão clicado
    });
});