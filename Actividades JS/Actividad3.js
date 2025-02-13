// Revertir un String
function revertirString(texto) {
    return texto.split('').reverse().join('');
}

// Contar Vocales
function contarVocales(texto) {
    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    return [...texto].filter(letra => vocales.includes(letra)).length;
}

// Palíndromo
function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

// Números Pares en un Rango
function numerosParesEnRango(inicio, fin) {
    const pares = [];
    for (let i = Math.min(inicio, fin); i <= Math.max(inicio, fin); i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}

// Tabla de Multiplicar
function tablaDeMultiplicar(numero) {
    const tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabla;
}

// Números Primos
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Adivinar un Número
function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intento;
    while (intento !== numeroAleatorio) {
        intento = parseInt(prompt('Adivina el número (entre 1 y 100):'));
        if (intento < numeroAleatorio) {
            console.log('El número es mayor.');
        } else if (intento > numeroAleatorio) {
            console.log('El número es menor.');
        } else {
            console.log('¡Felicidades! Adivinaste el número.');
        }
    }
}

// Texto a Acrónimo
function textoAAcronimo(texto) {
    return texto
        .split(' ')
        .map(palabra => palabra[0].toUpperCase())
        .join('');
}