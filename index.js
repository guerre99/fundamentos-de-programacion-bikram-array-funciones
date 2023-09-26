/* EJ 1 */
const arrayVacio = [];

/* EJ 2 */
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* EJ 3 */
const arrayNumerosPares = [0, 2, 4, 6, 8];

/* EJ 4 */
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

/* EJ 5 */
function suma(a, b) {
    return a + b;
}

/* EJ 6 */
function potenciacion(a, b) {
    return Math.pow(a, b);
}

/* EJ 7 */
function separarPalabras(str) {
    return str.split(' ');
}

/* EJ 8 */
function repetirString(str, num) {
    return str.repeat(num);
}

/* EJ 9 */
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

/* EJ 10 */
function ordenarArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

/* EJ 11 */
function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

/* EJ 12 */
function pintarArray(arr) {
    return '[' + arr.join(', ') + ']';
}

/* EJ 13 */
function arrayMapi(arr, func) {
    return arr.map(func);
}

/* EJ 14 */
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

/* EJ 15 */
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

/* EJ 16 */
const holaMundo = ['Hola', 'Mundo'];

/* EJ 17 */
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

/* EJ 18 */
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

/* EJ 19 */
function multiplicacion(a, b) {
    return a * b;
}

/* EJ 20 */
function division(a, b) {
    return a / b;
}

/* EJ 21 */
function esPar(num) {
    return num % 2 === 0;
}

/* EJ 22 */
const arrayFunciones = [suma(), resta(), multiplicacion()];

/* EJ 23 */
function ordenarArray2(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/* EJ 24 */
function obtenerImpares(arr) {
    return arr.filter(num => num % 2 !== 0);
}

/* EJ 25 */
function sumarArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

/* EJ 26 */
function multiplicarArray(arr) {
    return arr.reduce((a, b) => a * b, 1);
}