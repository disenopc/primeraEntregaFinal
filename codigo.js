// Determinacion de variables
let saludoDos;
let nombre;

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
        this.nombre = nombre;
        this.cantidad = cantidad;

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
const productoA = [{ nombre: "waltcan adulto", categoria: "Alimento Balanceado", precio: 1000, stock: 0 },
    { nombre: "waltcan cachorro", categoria: "Alimento Balanceado", precio: 1200, stock: 10 },
    { nombre: "jaspe adulto", categoria: "Alimento Balanceado", precio: 1000, stock: 15 },
    { nombre: "jaspe cachorro", categoria: "Alimento Balanceado", precio: 1200, stock: 10 }
];

console.log(productoA);
const compras = [];

//Primer paso, proceso de compra, control de stock
function stock() {

    do {
        nombre = prompt("Desea agregar un producto a su carrito?Cual?");
        if (nombre == "") {
            break
        }
        let cantidad = parseInt(prompt("Ingrese la cantidad de bolsas deseada"));
        let comprasIng = new Compra(nombre, cantidad);
        let stockDispo = productoA.find((c) => c.nombre == nombre);

        if (stockDispo) {
            if ((cantidad > 0) && (cantidad < stockDispo.stock)) {
                alert("El articulo que usted desea se encuentra disponible");
                compras.push(comprasIng);
                let indice = productoA.findIndex((c) => c.nombre == nombre);
                productoA[indice].stock = productoA[indice].stock - cantidad;
                console.log("El stock disponible ", stockDispo);
                console.log(compras);
                productoA[indice].precio = productoA[indice].precio * cantidad;
                console.log("Ticket de venta. " + " Producto: " + nombre + " Precio: " + productoA[indice].precio + " Cantidad: " + cantidad + " bolsa/s.");
                continue;
            }
            alert("El articulo que usted desea NO se encuentra disponible");
        }
        alert("Gracias por elegirnos");
    }
    while (nombre !== "");

};


// function comoPagar() {
//     let metodoDePago = prompt("Desea pagar en efectivo? \nSi \nNo \n(Por favor responda si o no).");
//     if (metodoDePago == "si") {
//         return this.precio;
//     } else {
//         return this.precio * 1.1;
//     }
// }

// comoPagar();

//Hora de compra
let ahora = new Date();

saludo();
mostrar("Bienvenido/a " + saludoDos + "! " + "Gracias por visitarnos.");
stock();
mostrar("Gracias por su compra" + ", " + ahora.toLocaleString());