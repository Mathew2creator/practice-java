function newFunction(input) {
    // Paso 1: Obtener la longitud del string
    const length = input.length;

    // Paso 2: Invertir el string
    const reversed = input.split('').reverse().join('');

    // Paso 3: Devolver el formato correcto: "longitud espacio string_invertido"
    return `${length} ${reversed}`;
}

// Prueba con los ejemplos:
const input1 = 'string';
console.log(newFunction(input1)); // "6 gnirts"

const input2 = 'variable';
console.log(newFunction(input2)); // "8 elbairav"

const input3 = 'pointer';
console.log(newFunction(input3)); // "7 retniop"
