$(document).ready(function() {
    var theme = $("#theme");
    if (localStorage != null) {
        console.log("LocalStorage inicializado correctamente");
        if (localStorage.getItem('theme') !== null) {
            theme.attr('href', localStorage.getItem('theme'));
        }
    }

    if (window.location.href.indexOf('index') > -1) {
        //Slider
        $(function() {
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 2500,
                responsive: true,
                pager: false
            });
        });

        //Posts

        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            },
            {

                title: 'Prueba de titulo 6',
                date: 'publicado el dia ' + moment().date() + " " + ' de ' + moment().format('MMMM') + " " + ' de ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sem fringilla ut morbi tincidunt augue interdum velit.
            Sagittis id consectetur purus ut faucibus pulvinar. Sit amet nisl suscipit adipiscing bibendum est. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. At in tellus integer feugiat scelerisque. Congue eu consequat
            ac felis donec et odio pellentesque. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Eu consequat ac felis donec et odio pellentesque diam. Semper quis lectus nulla at volutpat diam ut venenatis. Nibh mauris cursus
            mattis molestie a iaculis. Leo vel orci porta non pulvinar. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla facilisi cras fermentum
            odio eu feugiat pretium nibh. Mauris in aliquam sem fringilla ut.`
            }
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>
                    ${item.title}
                </h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">
                    Leer más
                </a>
            </article>
        `;
            $("#posts").append(post);
        });
    }
    $("#to-green").click(function() {
        theme.attr('href', 'css/green.css');
        localStorage.setItem("theme", "css/green.css");
    });

    $("#to-red").click(function() {
        theme.attr('href', 'css/red.css');
        localStorage.setItem("theme", "css/red.css");
    });

    $("#to-blue").click(function() {
        theme.attr('href', 'css/blue.css');
        localStorage.setItem("theme", "css/blue.css");
    });

    //Scroll arriba de la web

    $(".subir").click(function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login falso

    $("#login form").submit(function(e) {
        console.log("form name");
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $("#about p")
        about_parrafo.html("<br/><strong>Bievenido " + form_name + "</strong>");
        about_parrafo.append("<a href '#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function() {
            localStorage.removeItem('form_name');
            location.reload();
        });
    }

    //Acordeaon
    if (window.location.href.indexOf('about') > -1) {
        console.log("Entra a pestaña about");
        $("#acordeon").accordion();
    }

    if (window.location.href.indexOf('reloj') > -1) {
        var reloj = moment().format(' h:mm:ss');
        var reloj_html = $("#reloj");
        reloj_html.html(reloj);
        setInterval(function() {
            reloj = moment().format(' h:mm:ss');
            reloj_html.html(reloj);
        }, 1000);
    }
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
    }
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });

});