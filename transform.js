const datos = [
    {
      id: 1,
      nombre: "Juan",
      habilidades: ["JavaScript", "HTML", "CSS"],
      proyectos: [
        { id: 1, nombre: "Proyecto1" },
        { id: 2, nombre: "Proyecto2" }
      ]
    },
    {
      id: 2,
      nombre: "Maria",
      habilidades: ["Python", "SQL", "Django"],
      proyectos: [
        { id: 3, nombre: "Proyecto3" },
        { id: 4, nombre: "Proyecto4" }
      ]
    },
    {
      id: 3,
      nombre: "Pedro",
      habilidades: ["Java", "Spring", "Hibernate"],
      proyectos: [
        { id: 5, nombre: "Proyecto5" },
        { id: 6, nombre: "Proyecto6" }
      ]
    }
  ];
  
  // 1. Filtro de desarrolladores con habilidad en  "JavaScript"
  const desarrolladoresJavascript = datos.filter(desarrollador =>
    desarrollador.habilidades.includes("JavaScript")
  ).map(desarrollador => ({
    id: desarrollador.id,
    nombre: desarrollador.nombre,
    habilidades: desarrollador.habilidades,
    proyectos: desarrollador.proyectos
  }));
  
  // 2. Obtener los nombres de los proyectos
  const nombresProyectos = datos.flatMap(desarrollador =>
    desarrollador.proyectos.map(proyecto => proyecto.nombre)
  );
  
  console.log(desarrolladoresJavascript);
  console.log(nombresProyectos);
  