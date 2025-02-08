function newFunction(input) {
    // Paso 1: Obtener la longitud del string
    let length = input.length;

    // Paso 2: Invertir el string
    let reversed = input.split('').reverse().join('');

    // Paso 3: Modificar la primera letra del resultado a mayúscula
    let result = length + reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return result;
}

// uso
const input1 = "string";
console.log(newFunction(input1)); // "6gnirts"

const input2 = "variable";
console.log(newFunction(input2)); // "8eIbirav"

const input3 = "poinler";
console.log(newFunction(input3)); // "7reitniop"
