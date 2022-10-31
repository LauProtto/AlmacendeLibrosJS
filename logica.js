
const usuarios = [
    {
        nombre: "Laura",
        mail: "lauraj.protto@gmail.com",
        password: "Lali_1506"
    },

    {
        nombre: "Miguel",
        mail: "miguel.juarez@gmail.com",
        password: "Miguel1990"
    },

    {
        nombre: "Gabriel",
        mail: "gabriel.1989@gmail.com",
        password: "Migue1602"
    },
]

const libros = [
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        precio : "3800",
        img: "imagenenes/HP1.jpg"
    },

    {
        titulo: "Harry Potter y la cámara secreta",
        autor: "J. K. Rowling",
        precio: "2800",
        img: "imagenenes/HP2.jpg"
    },

    {
        titulo: "Harry Potter y el prisionero de Azkaban",
        autor: "J. K. Rowling",
        precio: "2500",
        img: "imagenenes/HP3.jpg"
    },

    {
        titulo: "Harry Potter y el cáliz de fuego",
        autor: "J. K. Rowling",
        precio: "2600",
        img: "imagenenes/HP4.jpg"
    },

    {
        titulo: "Harry Potter y la orden del fénix",
        autor: "J. K. Rowling",
        precio: "2800",
        img: "imagenenes/HP5.jpg"
    },

    {
        titulo: "Harry Potter y el misterio del príncipe",
        autor: "J. K. Rowling",
        precio: "2700",
        img: "imagenenes/HP6.jpg"
    },

    {
        titulo: "Harry Potter y las reliquias de la muerte",
        autor: "J. K. Rowling",
        precio: "3800",
        img: "imagenenes/HP7.jpg"
    },

    {
        titulo: "El Señor de los Anillos - La Comunidad del anillo",
        autor: "J. R. R. Tolkien",
        precio: "3800",
        img: "imagenenes/senior1.jpg"
    },

    {
        titulo: "El Señor de los Anillos - Las dos Torres",
        autor: "J. R. R. Tolkien",
        precio: "3800",
        img: "imagenenes/senior2.jpg"
        
    },

    {
        titulo: "El Señor de los Anillos - El retorno del Rey",
        autor: "J. R. R. Tolkien",
        precio: "2800",
        img: "imagenenes/senior3.jpg"
    },


]

//Elementos del DOM

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');

//validar usuario y contraseña

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);


    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

//Función de guardar datos en el Storage

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

//Cambiar DOM para que salude a quien se Loguea
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


//Limpiar el Storage

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

//Función que revisa el storage
function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoMascota(mascotas);
        presentarInfo(toggles, 'd-none');
    }
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function mostrarinfoLibro(array) {
    contTarjetas.innerHTML = " ";
    array.forEach(element => {
        let html = `<div class="card cardLibro" id="tarjeta${element.titulo}">
            <h3 class="card-header" id="tituloLibro">Nombre: ${element.titulo}</h3>
            <img src="${element.img}" alt="${element.titulo}" class="card-img-bottom" id="fotoLibro">
            <div class="card-body">
                <p class="card-text" id="autorLibro">Autor: ${element.autor}</p>
                <p class="card-text" id="autorLibro">Precio: ${element.precio} Pesos</p>
            </div>
        </div>`;
        contTarjetas.innerHTML += html
    });
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();


    if(!mailLogin.value||!passLogin.value){
        alert("Todos los campos son requeridos")
    } else{
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            //Revisamos si elige persistir la info aunque se cierre el navegador o no
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }

            modal.hide();
            mostrarinfoLibro(libros);
            presentarInfo(toggles, "d-none");
        }
    }
})

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage)); 


