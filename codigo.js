// Determinacion de variables
let cantidad;
let precioFinal;
let resultado;
let descuentoEfectivo;
let saludoDos;


//Inicio de la interaccion
function saludo() {
    saludoDos = prompt("Ingrese su nombre y apellido");
}
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
        this.precio = parseFloat(precio);
        this.stock = stock;

    }
};
const productoA = [];
productoA.push(new Producto("waltcan adulto", "Alimento Balanceado", 1200, 0));
productoA.push(new Producto("waltcan cachorro", "Alimento Balanceado", 1000, 10));
productoA.push(new Producto("jaspe adulto", "Alimento Balanceado", 1200, 15));
productoA.push(new Producto("jaspe cachorro", "Alimento Balanceado", 1000, 10));
console.log(productoA);
const compras = [];

//Primer paso, proceso de compra, control de stock
function stock() {
    let nombre;
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
                continue;
            }
            alert("El articulo que usted desea NO se encuentra disponible");
        }
        alert("Gracias por elegirnos");
    }
    while (nombre !== "no");

};

function formaDePago() {
    precioFinal = prompt('Desea abonar en Efectivo?\n Si \n No \n(Favor de escribir la palabra)');
}


//funcion anonima 
let mostrar = function(resultado) {
    alert(resultado);
};

//funcion flecha
const precio = (a, b) => {
    console.log(a * b);
    return a * b;
};


function operar(num1, num2, precioFinal) {
    switch (precioFinal) {
        case 'si':
            return precio(productoA[3], cantidad);
        case 'no':
            return precio(productoA[3], cantidad);
        default:
            break;
    }
}
//funcion flecha
const efectivo = (a, b) => {
    console.log(a - b);
    return a - b;
};

const resta = (a, b) => a - b
let descuentoEf = 0;

//pago en efectivo

function descuento() {
    if (precioFinal == "si") {
        alert("Se le realizará un descuento por pago en efectivo del 10%")
        descuentoEf = 0.1 * resultado;
        descuentoEfectivo = resultado - descuentoEf
    } else {
        alert("Se le cobrará precio de lista");
        return descuentoEfectivo = resultado;
    }
}

//Se realizaron compras de mercaderia para agregar al array de Producto

productoA.push(new Producto("DogChow Cachorro", "Alimento Balanceado", 1000, 10));
productoA.unshift(new Producto("DogChow Adulto", "Alimento Balanceado", 1200, 15));
console.log(productoA);

//Hora de compra
let ahora = new Date();


saludo();
mostrar("Bienvenido/a " + saludoDos + "! " + "Gracias por visitarnos.");
stock();
formaDePago();
resultado = operar(productoA[3], cantidad, precioFinal);
mostrar("El precio final de tu producto es $" + resultado);
descuento();
mostrar("El precio final de tu producto es $" + descuentoEfectivo);
alert("Gracias por su compra" + ", " + ahora.toLocaleString());