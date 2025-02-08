const datoEntrada = (input) => {
   
    let result = input.join('/');
  
    if (input[input.length - 1] === "py") {
      result += ".py";
    } else if (input[input.length - 1] === "mp4") {
      result += ".mp4";
    }
  
    return result;
  };
  
  
  const input1 = [
    "downloads",
    "videos",
    "capture",
    "mp4"
  ];
  console.log(datoEntrada(input1)); // "downloads/videos/capture/mp4"
  
  const input2 = [
    "codingGame",
    "python",
    "py"
  ];
  console.log(datoEntrada(input2)); // "codingGame/python/py"
  
  const input3 = [
    "programming",
    "languages",
    "easy",
    "beginner",
    "useful",
    "pythonstuff",
    "py"
  ];
  console.log(datoEntrada(input3)); // "programming/languages/easy/beginner/useful/pythonstuff.py"
  