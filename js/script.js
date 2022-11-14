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
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP1.jpg'
}, {
    id: 2,
    nombre: "Harry Potter y el prisionero de Azkaban",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP3.jpg'
}, {
    id: 3,
    nombre: "Harry Potter y la orden del fénix",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP4.jpg'
}, {
    id: 4,
    nombre: "Harry Potter y el misterio del príncipe",
    edición: "Salamadra",
    precio: 3800,
    img: './img/HP6.jpg'
},]



let carrito = [];
let totalCarrito;
const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    btnComprar = document.getElementById('btn${element.id}')
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');


function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);


    if (typeof encontrado === 'undefined') {
        return false;
    } else {

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
    nombreUsuario.innerHTML = `Bienvenido/a <span>${usuario.name}</span>`
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


function CrearTabla() {
    for (const libro of libros) {
        document.getElementById("cuerpocarrito").innerHTML += `
        <tr>
            <td>${libroElegido.id}</td>
            <td>${libroElegido.nombre}</td>
            <td>${libroElegido.edición}</td>
            <td>${libroElegido.precio}</td>
            <td><button class= "btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
    `;

        totalCarrito = carrito.reduce((acumulador, lib) => acumulador + lib.precio, 0);
        let totalCompra = document.getElementById("total");
        totalCompra.innerText = "Total a pagar $: " + totalCarrito

    }

}

function mostrarInfoLibro() {

    for (const libro of libros) {
        contTarjetas.innerHTML += `
                <div class="card cardLibro">
                    <img src="${libro.img}" alt="..." class="card-img-top">
                    <div class="card-body">
                        
                        <h5 class="card-text" id="idLibro">Id: ${libro.id}</h5>
                        <h5 class="card-header" id="nombreLibro">Nombre: ${libro.nombre}</h5>
                        <h5 class="card-text" id="edicionLibro">Edición: ${libro.edición}</h5>
                        <h5 class="card-text" id="precioLibro">Precio: $ ${libro.precio}</h5>
                        <button id="btn${libro.id}" class="btn btn-outline-warning">Comprar</button>
                    </div>
                </div>`;
    }

    libros.forEach((libro) => {
        document.getElementById(`btn${libro.id}`).addEventListener("click", function () {
            agregarAlCarrito(libro);
        })
    })

};

function agregarAlCarrito(libroElegido) {
    carrito.push(libroElegido)
    console.table(carrito)
    Swal.fire({
        title: 'Gran Elección!',
        text: "Agregaste un nuevo libro al Carrito",
        imageUrl: libroElegido.img,
        imageWidth: 200,
        imageHeight: 400,
        imageAlt: libroElegido.img,
        showConfirmButton: false,
        timer: 2000
    })
    document.getElementById("cuerpocarrito").innerHTML += `
      <tr>
          <td>${libroElegido.id}</td>
          <td>${libroElegido.nombre}</td>
          <td>${libroElegido.edición}</td>
          <td>${libroElegido.precio}</td>
          <td><button class= "btn btn-light" onclick="eliminar(event)">🗑️</button></td>
      </tr>
  `;

    totalCarrito = carrito.reduce((acumulador, lib) => acumulador + lib.precio, 0);
    let totalCompra = document.getElementById("total");
    totalCompra.innerText = "Total a pagar $: " + totalCarrito

}

function eliminar(ev) {
    console.log(ev)
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(libro => libro.id == id);
    console.log(indice)
    carrito.splice(indice, 1);
    console.table(carrito)
    fila.remove();

    let comprasAcumuladas = carrito.reduce((acumulador, lib) => acumulador + lib.precio, 0);
    total.innerText = "Total a pagar $: " + comprasAcumuladas;

}

// Repositorio de la API en GitHub: https://github.com/fedeperin/harry-potter-api
const grid = document.querySelector('.grid')

fetch("https://fedeperin-harry-potter-api.herokuapp.com/db")
    .then((res) => res.json())
    .then((data) => {
        mostrarHechizos(data.hechizos)
    })
    .catch((e) => console.log(e));

function mostrarHechizos(hechizos) {
    hechizos.forEach(hechizo => {
        const contenedorHechizo = document.createElement('div')
        const nombreHechizo = document.createElement('h2')
        const descripcionHechizo = document.createElement('p')

        contenedorHechizo.classList.add('hechizo')

        nombreHechizo.textContent = hechizo.hechizo
        descripcionHechizo.textContent = hechizo.uso


        contenedorHechizo.appendChild(nombreHechizo)
        contenedorHechizo.appendChild(descripcionHechizo)
        grid.appendChild(contenedorHechizo)
    })
}



btnLogin.addEventListener('click', (e) => {
    e.preventDefault();



    let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

    if (!data) {
        Swal.fire({
            text: "Usuario y/o contraseñas incorrectos.",
            icon: "warning",
            backdrop: "#66f4ae55"
        });
    } else {


        if (recordar.checked) {
            guardarDatos(data, localStorage);
            saludar(recuperarUsuario(localStorage));
        } else {
            guardarDatos(data, sessionStorage);
            saludar(recuperarUsuario(sessionStorage));
        }

        modal.hide();

        mostrarInfoLibro(libros);
        presentarInfo(toggles, 'd-none');
    }

});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage)); 
