localStorage.setItem("key_da_propriedade", "Valor armazenado");

const minha_propriedade = localStorage.getItem('key_da_propriedade');
// alert("Valor:" + minha_propriedade);

$(document).ready(function() {
    $(".click").click(function() {
        $(".click")
            .removeClass("alert-primary");
        $(this)
            .addClass("alert-success");
    });
});

$(document).ready(function() {
    $(".click2").click(function() {
        $(".click2")
            .removeClass("alert-primary");
        $(this)
            .addClass("alert-danger");
    });
});