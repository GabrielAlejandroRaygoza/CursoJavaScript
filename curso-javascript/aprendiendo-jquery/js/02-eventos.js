$(document).ready(function() {
    //Eventos mouseover mouseout
    var caja = $('#caja');
    /* caja.mouseover(function() {
        $(this).css('background', "red");
    });
    caja.mouseout(function() {
        $(this).css('background', 'green');
    }); */

    function cambia_rojo() {
        $(this).css('background', "red");
    }

    function cambia_verde() {
        $(this).css('background', 'green');
    }

    caja.hover(cambia_rojo, cambia_verde);

    //click
    caja.click(function() {
        $(this).css("background", "blue").css("color", "white");
    });

    //doubleclik
    caja.dblclick(function() {
        $(this).css("background", "pink").css("color", "yellow");
    });

    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function() {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function() {
        var that = $(this);
        that.css("border", "1px solid #ccc");
        datos.text(that.val()).show();
    });

    datos.mousedown(function() {
        $(this).css("border-color", "gray")
    });

    datos.mouseup(function() {
        $(this).css("border-color", "black")
    });

    $(document).mousemove(function() {
        $("body").css("cursor", "none");
        $("#sigueme").css("left", event.clientX)
            .css("top", event.clientY);
    });


});