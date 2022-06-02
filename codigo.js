// Determinacion de variables
let saludoDos;
let nombre;
let precioFinal;
let cantidad;
let comprasIng;
let stockDispo;


//Inicio de la interaccion
function saludo() {
    saludoDos = prompt("Ingrese su nombre y apellido");
}

//funcion anonima 
let mostrar = function(resultado) {
    alert(resultado);
};

//Definicion de arrays con objetos
class Compra {
    constructor(nombre, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.cantidad = parseInt(cantidad);
    }

}
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;

    }


};
//Definicion de Arrays


const productoA = [];
const compras = [];
productoA.push(new Producto("waltcan adulto", "Alimento Balanceado", 1200, 0));
productoA.push(new Producto("waltcan cachorro", "Alimento Balanceado", 1000, 10));
productoA.push(new Producto("jaspe adulto", "Alimento Balanceado", 1200, 15));
productoA.push(new Producto("jaspe cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);

//Primer paso, proceso de compra, control de stock
function stock() {

    do {
        nombre = prompt("Desea agregar un producto a su carrito?Cual?");
        if (nombre == "") {
            break
        }
        cantidad = parseInt(prompt("Ingrese la cantidad de bolsas deseada"));
        comprasIng = new Compra(nombre, cantidad);
        stockDispo = productoA.find((c) => c.nombre == nombre);

        if (stockDispo) {
            if ((cantidad > 0) && (cantidad < stockDispo.stock)) {
                alert("El articulo que usted desea se encuentra disponible");
                compras.push(comprasIng);
                let indice = productoA.findIndex((c) => c.nombre == nombre);
                productoA[indice].stock = productoA[indice].stock - cantidad;
                console.log("El stock disponible ", stockDispo);
                console.log(compras);
                productoA[indice].precio = productoA[indice].precio * cantidad;
                console.log("Ticket de venta. " + " Producto: " + nombre + " Precio: " + productoA[indice].precio + " Cantidad" + cantidad);
                continue;
            }
            alert("El articulo que usted desea NO se encuentra disponible");
        }
        alert("Gracias por elegirnos");
    }
    while (nombre !== "no");

};


//Forma de pago
function formaDePago() {
    precioFinal = prompt('Desea abonar en Efectivo?\n Si \n No \n(Favor de escribir la palabra)');
    if (precioFinal == "si") {
        alert("Se le realizará un descuento por pago en efectivo del 10%")
    } else {
        alert("Se le cobrará precio de lista");

    }
}

//Hora de compra
let ahora = new Date();

saludo();
mostrar("Bienvenido/a " + saludoDos + "! " + "Gracias por visitarnos.");
stock();
formaDePago();
alert("Gracias por su compra" + ", " + ahora.toLocaleString());