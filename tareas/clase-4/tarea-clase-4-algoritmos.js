//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
 
//Desafio #1

for(i=10; i>=1; i--){
  console.log(i);
}

//Desafio #2
for(i=1; i<=100; i++){
  console.log(i);
}

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

//Desafio #3
for (i = 0; i <= 10; i++) {
  console.log(7 + "x" + i + "=" + i * 7);
}
*/

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

//Desafio #4
for (i = 0; i <= 10; i++) {
  console.log(1 + "x" + i + "=" + i * 1);
}
for (i = 0; i <= 10; i++) {
  console.log(2 + "x" + i + "=" + i * 2);
}
for (i = 0; i <= 10; i++) {
  console.log(3 + "x" + i + "=" + i * 3);
}
for (i = 0; i <= 10; i++) {
  console.log(4 + "x" + i + "=" + i * 4);
}
for (i = 0; i <= 10; i++) {
  console.log(5 + "x" + i + "=" + i * 5);
}
for (i = 0; i <= 10; i++) {
  console.log(6 + "x" + i + "=" + i * 6);
}
for (i = 0; i <= 10; i++) {
  console.log(7 + "x" + i + "=" + i * 7);
}
for (i = 0; i <= 10; i++) {
  console.log(8 + "x" + i + "=" + i * 8);
}
for (i = 0; i <= 10; i++) {
  console.log(9 + "x" + i + "=" + i * 9);
}
*/

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
[1,2,3,4,5,6,7,8,9,10]

1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

//Desafio #5
const ARRAY_NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
for (i = 0; i < ARRAY_NUMEROS.length; i++) {
  suma = suma + ARRAY_NUMEROS[i];
}
console.log(suma);
*/

/*
Desafío de programación #6: Calcula 10! (10 factorial)

10 * 9 * 8 * ... * 

let factorial = 1;
for(i=10; i>=1; i--){
  factorial = factorial*i;
}
console.log(factorial);

/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let sumaImpares = 0;
for (i = 10; i <= 30; i++) {
  if (i % 2 !== 0) {
    sumaImpares = sumaImpares + i;
  }
}
console.log(sumaImpares);
*/

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

let temperatura = Number(prompt("Ingrese la temperatura en Celcius: "));

function convierteCelciusFahrenheit(temperatura) {
  temperatura = temperatura * 9 / 5 + 32;
  return temperatura;
}

console.log("La temperatura en Fahrenheit es: " + convierteCelciusFahrenheit(temperatura));
*/

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

let temperatura = Number(prompt("Ingrese la temperatura en Fahrenheit: "));

function convierteFahrenheitCelcius(temperatura) {
  temperatura = (temperatura - 32) / (9 / 5);
  return temperatura;
}

console.log("La temperatura en Celcius es: " + convierteFahrenheitCelcius(temperatura));
*/

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números

let suma = 0;
let arrayNumeros = [100, 200, 300, 400, 500];

for (i = 0; i < arrayNumeros.length; i++) {
  suma = suma + arrayNumeros[i];
}

console.log("La suma es: " + suma);
*/

/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

let arrayNumeros = [100, 200, 300, 400, 500];

function sumaArray(arrayNumeros) {
  let suma = 0;

  for (i = 0; i < arrayNumeros.length; i++) {
    suma = suma + arrayNumeros[i];
  }

  return suma;
}

console.log("La suma es: " + sumaArray(arrayNumeros));
*/

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

let arrayNumeros = [20, -30, 40, -50, 60, -100, 200, -300, 400];

function devuelveArrayPositivos(arrayNumeros) {

  for (i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] < 0) {
      for (j = i; j < arrayNumeros.length - 1; j++) {
        arrayNumeros[j] = arrayNumeros[j + 1];
      }
      arrayNumeros.length = arrayNumeros.length - 1;
    }
  }
  return arrayNumeros;
}

console.log("Los positivos son: " + devuelveArrayPositivos(arrayNumeros));
*/

/*
Desafío de programación #13: Find the maximum number in an array of numbers

let arrayNumeros = [1, 12, 40, -120, 22, 555, -6, 15, 250, 22, -5];

function encuetraMayorNumeroArray(arrayNumeros) {
  let mayorNumero = arrayNumeros[0];
  for (i = 1; i <= arrayNumeros.length; i++) {
    if (arrayNumeros[i] > mayorNumero) {
      mayorNumero = arrayNumeros[i];
    }
  }
  return mayorNumero;
}

console.log("El mayor numero en el array es: " + encuetraMayorNumeroArray(arrayNumeros));
*/

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let termino1 = 0;
let termino2 = 1;

console.log(termino1);
console.log(termino2);

for(i=2; i<=10; i++){
  termino3 = termino2 + termino1;
  
  console.log(termino2);  
  
  termino1 = termino2;
  termino2 = termino3;
}
*/

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión


function encuentraFibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return encuentraFibonacci(n - 1) + encuentraFibonacci(n - 2);
}

let n = Number(prompt("Ingrese 'n': "));
console.log("El numero fibonacci es: " + encuentraFibonacci(n));
*/

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

const NUMERO = Number(prompt("Ingrese un numero: "));

function compruebaPrimo(NUMERO) {
  let respuestaBoolean;

  let PD = 2;
  while ((PD <= NUMERO / 2) && (NUMERO % PD !== 0)) {
    PD = PD + 1;
  }
  if ((PD > NUMERO / 2) && (NUMERO !== 1)) {
    respuestaBoolean = true;
  } else {
    respuestaBoolean = false;
  }

  return respuestaBoolean;
}

console.log(compruebaPrimo(NUMERO));
*/

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
  123 = 1 + 2 + 3 = 6
  2 = 2
  1234 = 1 + 2 + 3 + 4 = 10

let numero = Number(prompt("Ingrese un numero: "));

function calculaSumaDigitos(numero) {
  let digito;
  let sumaDigitos = 0;

  while (numero > 0) {
    digito = numero % 10;
    sumaDigitos = sumaDigitos + digito;
    numero = Math.floor(numero / 10);
  }

  return sumaDigitos;
}

console.log("La suma de sus digitos es: " + calculaSumaDigitos(numero));
*/

/*
Desafío de programación #18: Imprimir los primeros 100 números primos

for(let i=1; i<=100; i++){
  let PD = 2;
  while ((PD <= Math.floor(i / 2)) && (i % PD !== 0)) {
    PD = PD + 1;
  }
  if ((PD > Math.floor(i / 2)) && (i !== 1)) {
    console.log(i);
  }
}

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
 Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

const cantidad = Number(prompt("Ingrese la cantidad de primos: "));
const mayor = Number(prompt("Ingrese numero desde el cual comenzar: "));

function retornaNumerosPrimosArray(cantidad, mayor) {
  let contador = 0;
  let arrayPrimos = [];
  let i = -1;
  while (contador < cantidad) {
    let PD = 2;
    while (PD <= mayor / 2 && mayor % PD !== 0) {
      PD = PD + 1;
    }
    if (PD > mayor / 2 && mayor !== 1) {
      i = i + 1;
      arrayPrimos[i] = mayor;
      contador = contador + 1;
    }
    mayor = mayor + 1;
  }

  return arrayPrimos;
}

console.log(retornaNumerosPrimosArray(cantidad, mayor));
*/

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
 [9,1,2,3,4] debería quedar como [1,2,3,4,9]
 [5] debería quedar como [5]
 [4,3,2,1] debería quedar como [3,2,1,4]

let arrayNumeros = [9, 1, 2, 3, 4];

function rotaArrayIzquierdaUnaPosicion(arrayNumeros) {
  let aux = arrayNumeros[0];
  for (i = 0; i < arrayNumeros.length - 1; i++) {
    arrayNumeros[i] = arrayNumeros[i + 1];
  }
  arrayNumeros[arrayNumeros.length - 1] = aux;

  return arrayNumeros;
}

console.log(rotaArrayIzquierdaUnaPosicion(arrayNumeros));
/*

/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
 [2,3,4,1] debería quedar como [1,2,3,4]
 [2,3] debería quedar como [3,2]

let arrayNumeros = [2, 3, 4, 1];

function rotaArrayIzquierdaUnaPosicion(arrayNumeros) {
  let aux = arrayNumeros[arrayNumeros.length - 1];
  for (i = arrayNumeros.length - 2; i >= 0; i--) {
    arrayNumeros[i + 1] = arrayNumeros[i];
  }
  arrayNumeros[0] = aux;

  return arrayNumeros;
}

console.log(rotaArrayIzquierdaUnaPosicion(arrayNumeros));
*/

/*
Desafío de programación #22: Invertir un array
Ejemplo:
 [1,2,3,4] debería quedar como [4,3,2,1]
 [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
 [5,6,3] debería quedar como [3,6,5]

let arrayNumeros = [6, 5, 4, 3, 2, 1];

function invierteArray(arrayNumeros) {
  for (i = 0; i <= arrayNumeros.length - 2; i++) {
    for (j = i + 1; j <= arrayNumeros.length - 1; j++) {
      if (j > i) {
        aux = arrayNumeros[j];
        arrayNumeros[j] = arrayNumeros[i];
        arrayNumeros[i] = aux;
      }
    }
  }

  return arrayNumeros;
}

console.log(invierteArray(arrayNumeros));

/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
 "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
 "bienvenido" debería quedar como "odinevneib"
*/

/* 
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
 [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
 [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
 [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
 [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
  [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/
