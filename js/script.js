
const usuarios = [{
    nombre: 'Azul',
    mail: 'azulperez@mail.com',
    pass: 'azulcomoelmarazul'
},
{
    nombre: 'Betiana',
    mail: 'betidicarlo@mail.com',
    pass: 'sha23AWx!'
},
{
    nombre: 'Carlos',
    mail: 'lopezcarlosadrian@mail.com',
    pass: 'sanlore2002'
}]

const libros = [{
    id: 1,
    nombre: "Harry Potter y la piedra filosofa",
    tipo: "Fantasia",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP1.jpg'
}, {
    id: 2,
    nombre: "Harry Potter y el prisionero de Azkaban",
    tipo: "Fantasia",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP3.jpg'
}, {
    id: 3,
    nombre: "Harry Potter y la orden del fénix",
    tipo: "Fantasia",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP4.jpg'
},{
    id: 4,
    nombre: "Harry Potter y el misterio del príncipe",
    tipo: "Fantasia",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP6.jpg'
},{
    id: 5,
    nombre: "Harry Potter y las reliquias de la muerte",
    tipo: "Fantasia",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP7.jpg'
}]



const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');


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


function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}


function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}


function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}



function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoLibro(libros);
        presentarInfo(toggles, 'd-none');
    }
}


function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}


function mostrarInfoLibro(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardLibro" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreLibro">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="idLibro">Id: ${element.id}</p>
                    <p class="card-text" id="tipoLibro">Tipo: ${element.tipo}</p>
                    <p class="card-text" id="edicionLibro">Edición: ${element.edición}</p>
                    <p class="card-text" id="precioLibro">Precio: $ ${element.precio}</p>
                    <button id="btn" class="btn-outline-warning">Comprar</button>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            
            modal.hide();
            
            mostrarInfoMascota(mascotas);
            presentarInfo(toggles, 'd-none');
        }
   
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage)); 