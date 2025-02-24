/* TIPS PARA RESOLVER EL PROBLEMA:
libros leidos -> Declarar de forma global
Usar push
Imprimir libro por libro -> No solo el arreglo
*/

let librosLeidos = [];

function agregarLibro(titulo) {
  librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
  if (librosLeidos.length == 0) {
    console.log("No hay libros registrados");
  } else {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
      console.log(librosLeidos[i]);
    }
  }
}

// EJEMPLO:
agregarLibro("El principito");
agregarLibro("Orgullo y Prejuicio");
agregarLibro("El arte de la guerra");
agregarLibro("La selección");
//console.log(librosLeidos)

mostrarLibrosLeidos();
