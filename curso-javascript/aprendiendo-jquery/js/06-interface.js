$(document).ready(function() {
    //Mover elemento por la pagina
    $(".elemento").draggable();

    //Redimencionar
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista-seleccionable").selectable();

    //Ordenar
    $(".lista-seleccionable").sortable({
        update: function(evento, ui) {
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos

    $("#mostrar").click(function() {
        $(".caja-efectos").toggle('shake');
    })

    //Tooltip

    $(document).tooltip();

});