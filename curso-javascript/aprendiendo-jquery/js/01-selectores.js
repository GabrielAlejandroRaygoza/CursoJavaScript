$(document).ready(() => {
    //Selector de id
    $("#rojo").css("background", "red")
        .css("color", "white");
    $("#amarillo").css("background", "yellow")
        .css("color", "green");
    $("#verde").css("background", "green")
        .css("color", "white");

    //Clase

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function() {
        console.log("Click");
        $(this).addClass('zebra');
    });

    //Etiqueta
    var parrafos = $("p").css("cursor", "pointer");

    parrafos.click(function() {
        var that = $(this);
        if (!that.hasClass("grande")) {
            that.addClass("grande");
        } else {
            that.removeClass("grande");
        }
    });

    //Atributos
    $('[title="Google"]').css("background", "#ccc");
    $('[title="Facebook"]').css("background", "blue");

    //$('p,a').addClass("margen-superior");

    var busqueda = $('#elemento2').parent().parent().find(".resaltado")
    console.log(busqueda);
});