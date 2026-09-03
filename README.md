plicación web Full Stack para la consulta de personas activas y visualización de su información detallada.

## Tecnologías utilizadas

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Frontend
- Angular
- TypeScript
- Bootstrap 4.6.2
- Nginx

### Base de datos
- MySQL 8.4

### Contenerización
- Docker
- Docker Compose

---

## Funcionalidades

- Consulta de personas con estatus activo.
- Tabla principal con:
  - Nombre
  - Teléfono
- Visualización del detalle completo de una persona mediante modal.
- Persistencia mediante Spring Data JPA.
- API REST con intercambio de información en formato JSON.
- Ejecución completa mediante Docker Compose.

--

Requisitos

Para ejecutar el proyecto solo es necesario tener instalado:

Docker
Docker Compose

--

Ejecución

Desde la carpeta raíz del proyecto ejecutar:
docker compose up --build

--

URLs
Frontend
http://localhost

API REST
http://localhost:8080/api/personas

Detalle de persona
http://localhost:8080/api/personas/{id}

Ejemplo:
http://localhost:8080/api/personas/1


Base de datos:
CQCIAS

Tabla:
Persona

La base de datos es inicializada automáticamente mediante:
database/init.sql

--

Consultar la base de datos
El contenedor de MySQL se llama:
cqcias-mysql

Para acceder:
docker exec -it cqcias-mysql mysql -u cqcias_user -p CQCIAS

Contraseña de desarrollo:
cqcias_password

Dentro de MySQL ejecutar las lineas:
SHOW TABLES;

SELECT * FROM Persona;
Convención de estatus
A = Activo
I = Inactivo

La consulta principal únicamente muestra registros cuyo estatus es A.

puede observarse un registro inactivo en la siguiente solicitud:
http://localhost:8080/api/personas/3

--

Detener la aplicación
docker compose down
