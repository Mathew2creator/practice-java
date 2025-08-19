const datoEntrada = (input) => {
    // Tomar todos los elementos excepto el último para la ruta
    const pathParts = input.slice(0, -1);
    // El último elemento es la extensión
    const extension = input[input.length - 1];
    
    // Unir la ruta con '/'
    const path = pathParts.join('/');
    
    // Devolver la ruta completa con la extensión correcta
    return `${path}.${extension}`;
};

// Prueba con los ejemplos:
const input1 = [
  'Downloads',
  'Videos',
  'capture',
  'mp4'
];
console.log(datoEntrada(input1)); // 'Downloads/Videos/capture.mp4'

const input2 = [
  'CodinGame',
  'python',
  'py',
];
console.log(datoEntrada(input2)); // 'CodinGame/python.py'

const input3 = [
  'programming',
  'languages',
  'easy',
  'beginner',
  'useful',
  'pythonstuff',
  'py'
];
console.log(datoEntrada(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'
