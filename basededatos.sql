CREATE TABLE Autores (
	idAutor INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	nacionalidad VARCHAR(100) NOT NULL,
	fecha_nacimiento DATE NOT NULL
);

-- Crear la tabla de Libros
CREATE TABLE Libros (
	idLibro INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
	anio_publicacion VARCHAR(4) NOT NULL,
	isbn VARCHAR NOT NULL,
	portada BLOB NULL,
	FOREIGN KEY (idAutor) REFERENCES Autores(idAutor)
);


/*------------------------------------------------------------------------*/

/*{
    "campos": {
        "Libros": {
            "id": "SQLITE3_INTEGER",
            "titulo": "SQLITE3_TEXT",
            "anio_publicacion": "SQLITE3_TEXT",
            "isbn": "SQLITE3_TEXT",
            "portada": "SQLITE3_BLOB",
            "id_autor": "SQLITE3_INTEGER"
        }
    },
    "sentencias": {
        "insertar_obra": "INSERT INTO Libros (titulo, anio_publicacion, isbn) VALUES (:titulo, :anio_publicacion, :isbn);",
       
        "actualizar_obra": "UPDATE Libros SET titulo = :nuevoTitulo, anio_publicacion = :nuevoanio_publicacion, portada = :nuevaportada, id_autor = :nuevoid_autor;",
        "borrar_obra": "DELETE FROM Libros WHERE id IN (:id)",
        "listar_obra_basico": "SELECT * FROM Libros;"    
    }
}

{
    "campos": {
        "Libros": {
            "id": "SQLITE3_INTEGER",
            "titulo": "SQLITE3_TEXT",
            "anio_publicacion": "SQLITE3_TEXT",
            "isbn": "SQLITE3_TEXT",
            "portada": "SQLITE3_BLOB"
        }
    },
    "sentencias": {
        "insertar_obra": "INSERT INTO Libros (titulo, anio_publicacion, isbn) VALUES (:titulo, :anio_publicacion, :isbn);",
       
        "actualizar_obra": "UPDATE Libros SET titulo = :nuevoTitulo, anio_publicacion = :nuevoanio_publicacion, portada = :nuevaportada, id_autor = :nuevoid_autor;",
        "borrar_obra": "DELETE FROM Libros WHERE id IN (:id)",
        "listar_obra_basico": "SELECT * FROM Libros;"    
    }
}

 pulsarIrLibros() {
        this.controlador.verVista(Vista.vlistarlibros)
          // Obtener la instancia de ListarLibros desde el mapa de vistas
        //const listarLibros = this.controlador.vistas.get(Vista.vlistarlibros)

        // Llamar al método listar en la instancia de ListarLibros
       // listarLibros.listar()

        /*// Limpiar los campos del formulario
        this.titulo.value = ''
        this.anio_publicacion.value = ''
        this.isbn.value = ''*/
    }

*/