'use strict'

$(document).ready(function() {
    //Load
    //$("#datos").load('https://reqres.in/');


    //Get y Post
    $.get('https://reqres.in/api/users', { page: 3 }, function(response) {
        response.data.forEach(element => {
            $("#datos").append('<p>' + element.first_name + " " + element.last_name + '</p>')
        });
    });

    $("#formulario").submit(function(e) {
        e.preventDefault();
        var usuario = {
            nombre: $("input[name='name']").val(),
            web: $("input[name='web']").val()
        };

        /* $.post($(this).attr("action"), usuario, function(response) {
            console.log(response);
        }).done(function() {
            alert("Usuario añadido correctamente")
        }); */

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function() {
                console.log("Enviando Usuario");
            },
            success: function(response) {
                console.log(response);
            },
            error: function() {
                console.log("Ha ocuarrido un error");
            },
            timeout: 1000
        })

        return false;
    });
});