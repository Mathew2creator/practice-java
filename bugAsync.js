//Utilización de async/await
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let usuario;
        if (id === 1) {
          usuario = { id: 1, nombre: "John Doe" };
          resolve(usuario); // Resolvemos la promesa con el usuario
        } else {
          reject("Usuario no encontrado"); // Rechazamos la promesa si no encontramos el usuario
        }
      }, 2000); // Simulamos que la llamada tarda 2 segundos
    });
  }
  
  // Función asincrónica para obtener el usuario
  async function obtenerUsuarioAsync(id) {
    try {
      const usuario = await obtenerUsuario(id); // Esperamos a que se resuelva la promesa
      console.log(usuario); // Mostramos el usuario
    } catch (error) {
      console.log(error); // Mostramos el error si ocurre
    }
  }
  
  // Llamada a la función asincrónica con id 1
  obtenerUsuarioAsync(1); // { id: 1, nombre: "John Doe" }
   