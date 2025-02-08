const datos = [
    {
      id: 1,
      nombre: "Juan",
      habilidades: ["Java Script", "IITML", "CSS"],
      proyectos: [
        { id: 1, nombre: "proyecto 1" },
        { id: 2, nombre: "proyecto 2" }
      ]
    },
    {
      id: 2,
      nombre: "Maria",
      habilidades: ["python", "SQL", "Django"],
      proyectos: [
        { id: 3, nombre: "proyecto 3" },
        { id: 4, nombre: "proyecto 4" }
      ]
    },
    {
      id: 3,
      nombre: "Pedro",
      habilidades: ["Java", "Spring", "Hibernate"],
      proyectos: [
        { id: 5, nombre: "proyecto 5" },
        { id: 6, nombre: "proyecto 6" }
      ]
    }
  ];
  
  function obtenerDesarrolladoresYProyectos(datos) {
    // Filtro de desarrolladores que tienen "Java Script" en sus habilidades
    const desarrolladoresConJS = datos.filter(desarrollador => 
      desarrollador.habilidades.includes("Java Script")
    );
  
    // Extraer el listado de desarrolladores y sus proyectos
    const resultado = desarrolladoresConJS.map(desarrollador => {
      return {
        nombre: desarrollador.nombre,
        proyectos: desarrollador.proyectos.map(proyecto => proyecto.nombre)
      };
    });
  
    return resultado;
  }
  

  console.log(obtenerDesarrolladoresYProyectos(datos));
