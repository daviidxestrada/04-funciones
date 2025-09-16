/*
FUNCIONES DECLARADAS

function nombreFunción(arg1,arg2){
   bloque de instrucciones
}

nombreFuncion(arg1,arg2)

*/

//          let num1= undefined, let num2=undefined
/*
function sumar(num1, num2) {
    let total= num1 + num2
    // console.log(total)

    return total

}

console.log(sumar(2, 3))
console.log(sumar(30,20))
console.log(sumar(5,5))
*/

/* funciones expresadas 

const nombreVariable function(arg1,arg2){
   bloque de instrucciones
}

nombreVariable()

*/
/*
const multiplicar=function(num1,num2){
    return num1 * num2
}

console.log(multiplicar(3,5))
console.log(multiplicar(3,50))
*/

/*

Funciones flecha

const nombreVariable=(arg1,arg2)=>{
    bloque de instrucciones
    }

*/


/*
const multiplicar=function(num1,num2){
    return num1 * num2
}

const multiplicar2 = (num1,num2) =>  num1 * num2

const mostrarMensaje = mensaje => mensaje

const mostrarMensaje2 = function (mensaje){
    return mensaje
}


console.log(multiplicar(3,5))
console.log(multiplicar2(3,50))
console.log(mostrarMensaje("Hola Mundo"))
console.log(mostrarMensaje2("Hola Mundo desde mostrarMensaje2"))
*/


/*

FUNCIONES CALLBACK

*/
/*
function calcular(num1, num2, cb){


     cb(num1, num2)
     console.log(cb(num1, num2))

}

calcular(2,3,(num1, num2) => num1*num2)

calcular(2,3,(num1, num2) =>num1 / num2)

calcular(2,3,(num1, num2) => 2 * (num1 / num2))
*/
/*
let contador = 0

const incrementarContador=()=>{
    contador += 1
    return contador
}
*/

//EJERCICIO 1: Crea una función llamada saludar que acepte un nombre como argumento y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".
function saludar(nombre) {
    return "Hola, " + nombre + "!"
}
    console.log(saludar("Chempy"));

    //ALT Ej1 con backsticks
    function saludar(nombre){
        return `¡Hola, ${nombre}!`
    }

    console.log(saludar("Maestro"));

//EJERCICIO 2: Crea una función llamada suma que acepte dos números y devuelva la suma de estos.

function suma(num1, num2){
    return (num1 + num2)
}

console.log(suma(2,5));

//EJERCICIO 3: Crea una función llamada esPar que acepte un número como argumento y devuelva true si el número es par o false si es impar.

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));


// EJ 3 ALTERNATIVA con if
function esPar(numero){
 if (numero % 2 === 0){
    return true;
 } else{
    return false
 }
}

console.log(esPar(7));

// EJERCICIO 4: Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.

function mayorDeTres(a,b,c){
    if (a>b && a>c){
        return a;
}else if (b > a && b > c){
    return b;
}else {
    return c;
}

}

console.log(mayorDeTres(523,1733,900));

//EJERCICIO 5:Crea una función llamada celsiusAFahrenheit que convierta una temperatura de grados Celsius a Fahrenheit usando la fórmula: F = (C \times 9/5) + 32]

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

console.log(celsiusAFahrenheit(100))
