//Ejercicio 1
const esPar = (numero) => numero % 2 === 0;
//Ejercicio 2
(() => {
    alert("¡Bienvenido a la página!");
})();
//Ejercicio 3
function generarNumeroAleatorio(min, max, callback) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    callback(numero);
}

// Función para verificar si un número es par o impar
const esParOImpar = (numero) => {
    console.log(`${numero} es ${numero % 2 === 0 ? "par" : "impar"}`);
};

// Función para verificar si un número es positivo o negativo
const esPositivoONegativo = (numero) => {
    console.log(`${numero} es ${numero >= 0 ? "positivo" : "negativo"}`);
};

// Pruebas
generarNumeroAleatorio(1, 100, esParOImpar);
generarNumeroAleatorio(-50, 50, esPositivoONegativo);
//Ejercicio 4
function crearTemporizador(intervalo) {
    let tiempoAcumulado = 0;

    return () => {
        tiempoAcumulado += intervalo;
        return tiempoAcumulado;
    };
}

// Prueba
const temporizador = crearTemporizador(5);
console.log(temporizador()); // 5
console.log(temporizador()); // 10
console.log(temporizador()); // 15
//Ampliación
function crearTemporizadorReal() {
    let tiempoInicial = new Date().getTime();

    return () => {
        const tiempoActual = new Date().getTime();
        const tiempoTranscurrido = (tiempoActual - tiempoInicial) / 1000; // En segundos
        return tiempoTranscurrido.toFixed(2) + " segundos";
    };
}

// Prueba
const temporizadorReal = crearTemporizadorReal();
setTimeout(() => console.log(temporizadorReal()), 2000); // ~2 segundos
setTimeout(() => console.log(temporizadorReal()), 5000); // ~5 segundos