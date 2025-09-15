/**
 * EJERCICIO DE PARCIAL: SISTEMA DE GESTIÓN DE BIBLIOTECA UNIVERSITARIA
 * 
 * OBJETIVO: Implementar un sistema que permita gestionar los préstamos de libros 
 * en una biblioteca universitaria, aplicando conceptos avanzados de manipulación
 * de objetos y arrays en JavaScript.
 * 
 * INSTRUCCIONES:
 * 1. Analiza la estructura de datos proporcionada
 * 2. Implementa todas las funciones requeridas 
 * 3. Prueba tus funciones con los datos de ejemplo y los casos de prueba proporcionados
 * 4. NO modifiques la estructura base de los objetos, solo añade las funcionalidades solicitadas
 */

// Importamos los datos desde el archivo JSON usando ES6 import
import bibliotecaData from './datos_biblioteca.json' assert { type: 'json' };

// Creamos una copia de los datos para trabajar con ellos
const biblioteca = {...bibliotecaData};

/**
 * FUNCIONES A IMPLEMENTAR:
 */

/**
 * 1. Función para prestar un libro
 * 
 * Implementa una función que gestione el proceso de préstamo de un libro a un estudiante.
 * Deberás realizar las validaciones necesarias y actualizar los registros correspondientes.
 * 
 * @param {number} idLibro - ID del libro a prestar
 * @param {number} idEstudiante - ID del estudiante que pide prestado
 * @param {string} fechaPrestamo - Fecha del préstamo (formato YYYY-MM-DD)
 * @return {boolean|string} - true si se realizó el préstamo, mensaje de error si no
 */
function prestarLibro(idLibro, idEstudiante, fechaPrestamo) {
  // Tu código aquí
  //Libro debe existir
  if (!biblioteca.libros.some(libro => libro.id === idLibro)) {
    return "Error: El libro no existe.";
  }

  //El estudiante debe existir
  if (!biblioteca.estudiantes.some(est => est.id === idEstudiante)) {
    return "Error: El estudiante no existe.";
  }

  //El libro debe estar disponible
  const libro = biblioteca.libros.find(libro => libro.id === idLibro);
  if (!libro.disponible) {
    return "Error: El libro no está disponible.";
  }
  else {
    libro.disponible = false;
    libro.prestamos.push({
      idLibro: idLibro,
      idEstudiante: idEstudiante,
      fechaPrestamo: fechaPrestamo,
      fechaDevolucion: null
    });
    return true;
  }
}


/**
 * 2. Función para buscar libros
 * 
 * Desarrolla una función de búsqueda flexible que permita encontrar libros 
 * según diversos criterios como título, autor, categoría y disponibilidad.
 * 
 * @param {object} criterios - Objeto con los criterios de búsqueda
 * @return {array} - Array con los libros que cumplen los criterios
 */
function buscarLibros(criterios) {
  // Tu código aquí
  // Ejemplo de criterios: {titulo: "javascript", disponible: true}
  return biblioteca.libros.filter(libro => {
    for (let key in criterios) {
      if (key === "titulo" || key === "autor" || key === "categoria") {
        if (!libro[key].toLowerCase().includes(criterios[key].toLowerCase())) {
          return false;
        }
      } else if (key === "disponible") {
        if (libro[key] !== criterios[key]) {
          return false;
        }
      }
    }
    return true;
  });
}


// ALGUNOS CASOS DE PRUEBA
// Descomentar para probar tu implementación


console.log("Probando préstamo de libro:");
console.log(prestarLibro(1, 3, "2025-09-13"));

console.log("\nBuscando libros de programación disponibles:");
console.log(buscarLibros({categoria: "Programación", disponible: true}));

//Otras pruebas:
//Pruebas de préstamo
console.log("Prueba de segundo préstamo del mismo libro");
console.log(prestarLibro(1, 2, "2025-09-14"));

console.log("Prueba de préstamo de libro inexistente");
console.log(prestarLibro(10, 2, "2025-09-14"));

console.log("Prueba de préstamo a estudiante inexistente");
console.log(prestarLibro(2, 10, "2025-09-14"));

//Prueba de busqueda
console.log("Prueba de búsqueda por autor");
console.log(buscarLibros({autor: "John Doe"}));

console.log("Prueba de búsqueda por título");
console.log(buscarLibros({titulo: "Node.js"}));

console.log("Prueba de búsqueda por disponibilidad");
console.log(buscarLibros({disponible: true}));

console.log("Prueba de búsqueda sin criterios (debería devolver todos los libros)");
console.log(buscarLibros({}));