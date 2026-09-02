CREATE DATABASE IF NOT EXISTS CQCIAS;

USE CQCIAS;

CREATE TABLE IF NOT EXISTS Persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    primer_apellido VARCHAR(100) NOT NULL,
    segundo_apellido VARCHAR(100) NULL,
    telefono VARCHAR(10) NOT NULL,
    estatus VARCHAR(1) NOT NULL
);

INSERT INTO Persona
    (nombre, primer_apellido, segundo_apellido, telefono, estatus)
VALUES
    ('Fernando', 'Galindo', 'Segundo', '4681121992', 'A'),
    ('Oscar', 'Galindo', 'Segundo', '4421025821', 'A'),
    ('Maria Veronica', 'Segundo', NULL, '4681234567', 'I');