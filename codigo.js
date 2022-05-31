//FUNCION UNO
//Variables
let precioUnitario;
let cantidad;
let precioFinal;
let resultado;
let descuentoEfectivo;

function formaDePago() {
    cantidad = parseInt(prompt('De cuántos kg prefiere la bolsa de Alimento Balanceado? \n 15kg \n 25kg \n(Sólo ingresar el número)'));
    precioUnitario = parseInt(prompt('Ingrese el precio unitario de su producto elegido'));
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
            return precio(precioUnitario, cantidad);
        case 'no':
            return precio(precioUnitario, cantidad);
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

//FUNCION DOS

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
formaDePago();
resultado = operar(precioUnitario, cantidad, precioFinal);
mostrar("El precio final de tu producto es $" + resultado);
descuento();
mostrar("El precio final de tu producto es $" + descuentoEfectivo);