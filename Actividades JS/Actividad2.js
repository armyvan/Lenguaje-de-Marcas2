// Conversión de String a Número y Sumar
const str1 = "123";
const str2 = "456";

const num1 = parseInt(str1); // O Number(str1) o +str1
const num2 = parseInt(str2); // O Number(str2) o +str2

const sumaStrings = num1 + num2;
console.log(`La suma de ${str1} y ${str2} es: ${sumaStrings}`); // Resultado: 579

// Conversión de Boolean a Número
const bool1 = true;
const bool2 = false;

const numBool1 = bool1 ? 1 : 0; // Operador ternario
const numBool2 = bool2 ? 1 : 0;

// Alternativa con Number()
//const numBool1 = Number(bool1);
//const numBool2 = Number(bool2);

const sumaBooleanos = numBool1 + numBool2;
console.log(`La suma de true y false es: ${sumaBooleanos}`); // Resultado: 1

// Conversión de Número a String
const num3 = 123;
const str3 = String(num3); // O num3.toString() o `${num3}` (template literal)
const concatenacion = str3 + " es un número";
console.log(concatenacion); // Resultado: 123 es un número

// Operadores Aritméticos
// Calcular el Perímetro de un Rectángulo
const base = 10;
const altura = 20;
const perimetro = 2 * (base + altura);
console.log(`El perímetro del rectángulo es: ${perimetro}`); // Resultado: 60

// Redondeo hacia Arriba (sin Math.ceil)
const num4 = 12.3;
const redondeoArriba = Math.trunc(num4) + (num4 % 1 > 0 ? 1 : 0); // Usando truncamiento y módulo
console.log(`Redondeo de ${num4} hacia arriba: ${redondeoArriba}`); // Resultado: 13
// Otra forma (quizás más legible):
const redondeoArriba2 = parseInt(num4 + 0.9999999999);
console.log(`Redondeo de ${num4} hacia arriba: ${redondeoArriba2}`); // Resultado: 13

// Raíz Cuadrada con Exponentes
const num5 = 16;
const raizCuadrada = num5 ** (1/2);
console.log(`La raíz cuadrada de ${num5} es: ${raizCuadrada}`); // Resultado: 4

// Operadores Lógicos
// Determinar si un Número es Positivo
const num6 = -5;
const num7 = 7;
const esPositivo6 = num6 > 0;
const esPositivo7 = num7 > 0;
console.log(`${num6} es positivo: ${esPositivo6}`); // Resultado: false
console.log(`${num7} es positivo: ${esPositivo7}`); // Resultado: true

// Verificar Rango de Edad
const edad = 25;
const edadValida = edad >= 18 && edad <= 35;
console.log(`La edad ${edad} es válida: ${edadValida}`); // Resultado: true

// Comparar Dos Números
const a = 12;
const b = 20;
const comparacion = a > b || a === b;
console.log(`¿a es mayor que b o a es igual a b?: ${comparacion}`); // Resultado: false

// Operadores de Cortocircuito
// Valor Predeterminado
let nombre = null;
const apellido = "García";
const nombreCompleto = (nombre || "Invitado") + " " + apellido;
console.log(`Nombre completo: ${nombreCompleto}`); // Resultado: Invitado García

// Validar Datos de Usuario
const activo = true;
let email = null;
const emailUsuario = activo && email; // Si activo es false, devuelve false. Si es true, evalúa email.
console.log(`Email del usuario: ${emailUsuario}`); // Resultado: null

email = "test@example.com";
const emailUsuario2 = activo && email;
console.log(`Email del usuario: ${emailUsuario2}`); // Resultado: test@example.com

// Extras
// Calcular Precio Final con Descuento
let precio = 100;
let descuento = null;

//Usando Nullish coalescing operator (??)
const descuentoAplicado = descuento ?? 0.10; // Si descuento es null o undefined, se usa 0.10
const precioFinal = precio * (1 - descuentoAplicado);
console.log(`Precio final con descuento: ${precioFinal}`); // Resultado: 90

descuento = 0.20;
const descuentoAplicado2 = descuento ?? 0.10;
const precioFinal2 = precio * (1 - descuentoAplicado2);
console.log(`Precio final con descuento: ${precioFinal2}`); // Resultado: 80

// Determinar Edad Válida
let edadStr = "30";
let edadNum = Number(edadStr); // Convertimos la edad a un número.
edadNum = (edadNum >= 18 && edadNum <= 65) ? edadNum : 0; //Usando el operador ternario
console.log(`Edad válida: ${edadNum}`); // Resultado: 30

edadStr = "abc";
edadNum = Number(edadStr);
edadNum = (edadNum >= 18 && edadNum <= 65) ? edadNum : 0;
console.log(`Edad válida: ${edadNum}`); // Resultado: 0

edadStr = "10";
edadNum = Number(edadStr);
edadNum = (edadNum >= 18 && edadNum <= 65) ? edadNum : 0;
console.log(`Edad válida: ${edadNum}`); // Resultado: 0