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
            alert("Bienvenido/a a Dulces Creaciones, ya podes comenzar a comprar !");
            ingresar = true;
        break;
        }else{ 
            alert("Error. Te quedan "+i+" intentos")
        
        }
    }
    return ingresar;

    }





// Selección de producto

   
if (login()){
    let producto = prompt("Ingresa el producto deseado y te informamos el precio")
    while(producto != "salir"){
        switch(producto){
            case "galletas glaseadas":
                prompt("el precio de las galletas glaseadas es de $500 por kg");
            break;

            case "cupcake":
                prompt("el precio de los Cupcake es de $150 c/u");
            break;

            case "Tortas heladas":
                prompt("el precio de las tortas heladas es de $3500 c/u");
            break;

            case "rolls de canela":
                prompt("el precio de los Rolls de Canela es de $300 c/u");
            break;

            case "croissants":
                prompt("el precio de las Croissants es de $250 c/u");
            break;
            
        }
        if(producto = "fin"){
            alert ("Esta saliendo de las opciones de compra")
            break;
        } else (producto = prompt("Ingresa el producto deseado y te informamos el precio"))    
        break;
    }



// calcular producto con descuento

    let precioProducto = parseFloat(prompt("Ingrese el precio del producto"))

    function calcularDescuento (precio){
        return precio * 0.20;
    }

    let descuento = calcularDescuento(precioProducto)
        alert("El valor del descuento es de $"+descuento)

    function mostrarPrecioTotal (precioIngresado,descuentoCalculado){
        alert("El precio con descuento incluido es $" +(precioIngresado-descuentoCalculado))
    }   
    mostrarPrecioTotal (precioProducto,descuento)

}else {
    alert("Lamentamos no poder darte acceso a tu cuenta :(");
}    


