'use strict'

window.addEventListener("load", () => {
    var divUsuarios = document.querySelector("#usuarios");
    var divJanet = document.querySelector("#janet");
    var divProfesor = document.querySelector("#profesor");



    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            return getInfo()
        })
        .then(data => {
            divProfesor.innerHTML = data;
            return getJanet();
        })
        .then(data => data.json())
        .then(janet => {
            mostrarJanet(janet.data);
        })
        .catch(error => {
            alert("Error en las peticiones: " + error);
        });


    function getUsuarios() {
        return fetch('https://reqres.in/api/users?page=1');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo() {
        var profesor = {
            nombre: 'Gabriel',
            apellidos: 'Raygoza Perez',
            url: "http://www.google.com"
        };
        return new Promise((resolve, reject) => {
            var profesor_string = ""
            setTimeout(() => {
                profesor_string = JSON.stringify(profesor);
                if (typeof profesor_string != "string" || profesor_string == "") return reject("Error");
                return resolve(profesor_string);
            }, 3000);
        });



    }

    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            console.log(user);
            let nombre = document.createElement("h2");
            nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
            divUsuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = "none";
        });
    }

    function mostrarJanet(user) {

        let nombre = document.createElement("h3");
        let avatar = document.createElement("img");

        nombre.innerHTML = user.first_name + " " + user.last_name;

        avatar.src = user.avatar;
        avatar.width = "100";

        console.log(avatar);

        divJanet.appendChild(nombre);
        divJanet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = "none";
    }

    console.log(usuarios);
});