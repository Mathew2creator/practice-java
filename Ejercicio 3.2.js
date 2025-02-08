const newFunction = (input) => {
    // Convertir el número a una cadena
    const inputStr = input.toString();
    
    // Si el número es de un solo dígito, lo devolvemos tal cual
    if (inputStr.length === 1) {
      return inputStr;
    }
    
    // Si es más largo, unimos los dígitos con un guion
    return inputStr.split('').join('-');
  };
  
  // Prueba con los ejemplos:
  
  const input = 10;
  console.log(newFunction(input)); // "1-0"
  
  const secondinput = 1;
  console.log(newFunction(secondinput)); // "1"
  
  const thirdinput = 11234;
  console.log(newFunction(thirdinput)); // "1-1-2-3-4"
  