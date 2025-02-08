const usuario = {
    nombre: "Mathew",
    apellido: "Mejias",
    temas: [
      { tema: "Node js", fecha: "2025-03-25" },
      { tema: "Git", fecha: "2025-02-01" },
      { tema: "React", fecha: "2025-05-12" }
    ]
  };
  
  // Buscar y mostrar la fecha de inicio del módulo de React
  const reactTema = usuario.temas.find(tema => tema.tema === "React");
  console.log(`La fecha de inicio del módulo de React es: ${reactTema.fecha}`);
