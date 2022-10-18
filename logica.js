//Primera pre entrega
//ingreso con usuario y contraseña a la página.
let savedUsu = "Lali Protto";
let savedContra = "Lali_1506";

function login () {
    let ingresar = false;

    for (let i=2; i>=0; i--){
        let userName = prompt("Ingresa tu nombre de usuario. Tienes "+(i+1)+" intentos");
        let contrasenia = prompt("Ingresa tu contraseña. Tienes "+(i+1)+" intentos");
        if ((userName === savedUsu) && (contrasenia === savedContra)){
            alert("Bienvenido/a El almacen de Libros, ya podes comenzar a comprar !");
            ingresar = true;
        break;
        }else{ 
            alert("Error. Te quedan "+i+" intentos")
        
        }
    }
    return ingresar;

    }
    

// Selección de producto
class Libro {
    constructor(titulo, autor, precio) {
        this.titulo  = titulo.toUpperCase();
        this.autor = autor;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    
    }
}
//Declaramos un array de productos para almacenar objetos
const libros = [
    new Libro ("Harry Potter y la piedra filosofal", "J. K. Rowling", "3800"),
    new Libro ("Harry Potter y la cámara secreta", "J. K. Rowling", "2800"),
    new Libro ("Harry Potter y el prisionero de Azkaban", "J. K. Rowling", "2500"),
    new Libro ("Harry Potter y el cáliz de fuego", "J. K. Rowling", "2600"),
    new Libro ("Harry Potter y la orden del fénix", "J. K. Rowling", "2800"),
    new Libro ("Harry Potter y el misterio del príncipe", "J. K. Rowling", "2700"),
    new Libro ("Harry Potter y las reliquias de la muerte", "J. K. Rowling", "3800"),
    new Libro ("La Comunidad del anillo", "J. R. R. Tolkien", "3800"),
    new Libro ("Las dos Torres", "J. R. R. Tolkien", "2600"),
    new Libro ("El retorno del Rey", "J. R. R. Tolkien", "2800"),

];

if (login()){
    let metodoBusqueda = prompt("Elegi el método de busqueda:\n1 - Títulos de la A-Z \n2 - Títulos de la Z-A \n3 - Mayor precio \n4 - Menor precio")
;    
function organizar (metodoBusqueda,libros){
        let librosOrdenados = libros.slice(0);

        switch(metodoBusqueda){
            case "1":
                let nombreAscendente = librosOrdenados.sort((a,b)=>a.titulo.localeCompare(b.titulo));
                return nombreAscendente;

            case "2":
                let nombreDescendente = librosOrdenados.sort((b,a)=>b.titulo.localeCompare(a.titulo));
                return nombreDescendente;

            case "3":
                return librosOrdenados.sort((a,b)=>a.precio - b.precio);
             

            case "4":
                return librosOrdenados.sort((b,a)=>b.precio - a.precio);
                

            default:
                alert("Opción inválida");
                break;
        }
    }
    function crearStringFinal(libros){
        let datos ="";

        libros.forEach(libros => {
            datos += "Titulo: "+ libros.titulo + "\nAutor: " + libros.autor + "\nPrecio: " + libros.precio
        });
        
        return datos;
    }

    alert(crearStringFinal(organizar(metodoBusqueda, libros)))


let autorElegido = prompt ("Escribí el nombre del autor del libro que queres")
const filtrado = libros.filter((libro) => libro.autor.includes(autorElegido))
if (filtrado.length == 0){
    alert("No tenemos stock disponible al momento, consulta más adelante");
}else{
    const imprimible = filtrado.map((libro) => libro.titulo);
    alert("Los libros que tenemos disponible según tu autor elegido son: " + imprimible.join("\n"))
}

}