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