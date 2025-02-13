// 1. Crear y Mostrar Variables en la Consola
let stringVar = "Hola, soy una cadena";
let numberVar = 42;
let booleanVar = true;
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);

// 2. Concatenar Cadenas de Texto
let nombre1 = "Juan";
let nombre2 = "Pérez";
let nombreCompleto = nombre1 + " " + nombre2;
console.log("Nombre completo:", nombreCompleto);

// 3. Sumar Dos Números
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let suma = num1 + num2;
console.warn("La suma de los números es:", suma);

// 4. Variable con Operación Matemática
let numeroA = 15;
let numeroB = 5;
let operacion = numeroA * numeroB; // Puedes cambiar por +, -, /
console.log("El resultado de la operación es:", operacion);

// 5. Intercambiar Valores entre Variables
let a = 10;
let b = 20;
console.log("Antes del intercambio: a =", a, ", b =", b);
let temp = a;
a = b;
b = temp;
console.log("Después del intercambio: a =", a, ", b =", b);

// 6. Mensaje Personalizado
let nombreUsuario = prompt("Introduce tu nombre:");
console.log(`Hola, ${nombreUsuario}`);

// 7. Edad del Usuario
let anioNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
let edad = new Date().getFullYear() - anioNacimiento;
alert("Tu edad es: " + edad);

// 8. Multiplicación
let multiplicando1 = parseFloat(prompt("Introduce el primer número para multiplicar:"));
let multiplicando2 = parseFloat(prompt("Introduce el segundo número para multiplicar:"));
let producto = multiplicando1 * multiplicando2;
console.log("El producto de los números es:", producto);

// 9. Crear una Frase Completa
let nombre = prompt("¿Cómo te llamas?");
let colorFavorito = prompt("¿Cuál es tu color favorito?");
let ciudad = prompt("¿De dónde eres?");
console.log(`Me llamo ${nombre}, mi color favorito es ${colorFavorito} y soy de ${ciudad}.`);

// 10. Convertir Grados Celsius a Fahrenheit
let celsius = parseFloat(prompt("Introduce los grados Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
console.error(`La temperatura en Fahrenheit es: ${fahrenheit}`);

// 11. Determinar el Tipo de Dato
let valor = 123; // Cambia el valor según necesites
console.log("El tipo de dato de la variable es:", typeof valor);