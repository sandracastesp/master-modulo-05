// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Harry Potter", "autor": "J.K. Rowling", "genero": "Fantasía", "disponible": true },
        { "titulo": "El retrato de Dorian Gray", "autor": "Oscar Wilde", "genero": "Ficción", "disponible": true },
        { "titulo": "Rebelión en la granja", "autor": "George Orwell", "genero": "Ficción", "disponible": true },
        { "titulo": "Ensayo sobre la ceguera", "autor": "José Saramago", "genero": "Ficción", "disponible": true },
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 3 segundos
        callback(biblioteca);
    }, 3000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} - ${libro.genero} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    console.log(`Se agrega el libro: ${titulo} - ${autor} - ${genero} (${disponible ? 'Disponible' : 'Prestado'})`);
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        biblioteca.libros.push(nuevoLibro);
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}.`);
        } else {
            console.log(`El título "${titulo}" no está en la biblioteca.`);
        }
    }, 2000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("El retrato de Dorian Gray", false);
// Prueba de error
actualizarDisponibilidad("El Quijote de la Mancha", true); 